"use client";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { LocalizedBranch, LocalizedCountry, LocalizedRegion } from "@/lib/sanity/queries";

type FranchiseMapProps = {
  branches: LocalizedBranch[];
  regions: LocalizedRegion[];
  countries: LocalizedCountry[];
  title: string;
  locale: string;
};

type Status = "active" | "reserved" | "available";

const statusColor: Record<Status, string> = {
  active: "#3ecf8e",
  reserved: "#f31260",
  available: "#4ab8ff",
};

export function FranchiseMap({ branches, regions, countries, title, locale }: FranchiseMapProps) {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [selectedCountryId, setSelectedCountryId] = useState<string>(countries[0]?.id ?? "");
  const [selectedAvailableBranchId, setSelectedAvailableBranchId] = useState<string>("");

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const selectedCountry = useMemo(
    () => countries.find((country) => country.id === selectedCountryId) ?? countries[0],
    [countries, selectedCountryId],
  );

  const countryBranches = useMemo(
    () => branches.filter((branch) => branch.countryId === selectedCountry?.id),
    [branches, selectedCountry?.id],
  );

  const selectedRegionName = useMemo(() => {
    const branch = countryBranches.find((item) => item.id === selectedAvailableBranchId);
    if (!branch) return "";
    const region = regions.find((item) => item.id === branch.regionId);
    return region?.name ?? branch.city;
  }, [countryBranches, regions, selectedAvailableBranchId]);

  useEffect(() => {
    if (!mapContainerRef.current || !selectedCountry || !token || mapRef.current) {
      return;
    }

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [selectedCountry.centerLng, selectedCountry.centerLat],
      zoom: selectedCountry.defaultZoom,
    });

    mapRef.current = map;

    return () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];
      map.remove();
      mapRef.current = null;
    };
  }, [selectedCountry, token]);

  useEffect(() => {
    if (!mapRef.current || !selectedCountry) {
      return;
    }

    mapRef.current.flyTo({
      center: [selectedCountry.centerLng, selectedCountry.centerLat],
      zoom: selectedCountry.defaultZoom,
      essential: true,
    });
  }, [selectedCountry]);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    countryBranches.forEach((branch) => {
      const element = document.createElement("button");
      element.type = "button";
      element.className = "h-4 w-4 rounded-full border border-white/40";
      element.style.backgroundColor = statusColor[branch.status as Status];
      element.setAttribute("aria-label", branch.city);

      if (branch.status === "available") {
        element.addEventListener("click", () => setSelectedAvailableBranchId(branch.id));
      }

      const marker = new mapboxgl.Marker({ element }).setLngLat([branch.lng, branch.lat]).addTo(mapRef.current!);
      markersRef.current.push(marker);
    });
  }, [countryBranches]);

  const hasBranches = countryBranches.length > 0;

  return (
    <section className="space-y-4">
      <h3 className="text-2xl font-medium">{title}</h3>

      <div className="flex gap-2 overflow-x-auto pb-2 md:hidden">
        {countries.map((country) => (
          <button
            key={country.id}
            type="button"
            onClick={() => setSelectedCountryId(country.id)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm ${selectedCountryId === country.id ? "border-cyan text-cyan" : "border-gray-2/40 text-gray-1"}`}
          >
            {country.name}
          </button>
        ))}
      </div>

      <div className="hidden md:block">
        <select
          value={selectedCountryId}
          onChange={(event) => setSelectedCountryId(event.target.value)}
          className="w-full max-w-xs border border-gray-2/40 bg-navy-2 px-3 py-2 text-white"
        >
          {countries.map((country) => (
            <option key={country.id} value={country.id}>{country.name}</option>
          ))}
        </select>
      </div>

      <div ref={mapContainerRef} className="h-[420px] w-full border border-gray-2/40 bg-navy-2" />

      {!hasBranches ? (
        <div className="border border-gray-2/40 bg-navy-2 p-6 text-gray-1">
          <p>No locations available yet. Register interest.</p>
          <Link href={`/${locale}/grow/become-a-partner`} className="mt-3 inline-flex text-cyan hover:text-cyan-2">Apply now</Link>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-6 border border-gray-2/40 bg-navy-2 p-4 text-sm text-gray-1">
        <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#3ecf8e]" /> Active branch</span>
        <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#f31260]" /> Reserved</span>
        <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#4ab8ff]" /> Available</span>
      </div>

      {selectedAvailableBranchId ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md border border-gray-2/40 bg-navy-2 p-6">
            <h4 className="text-2xl font-medium">{selectedRegionName}</h4>
            <p className="mt-3 text-gray-1">Apply for this location.</p>
            <div className="mt-6 flex items-center gap-3">
              <Link href={`/${locale}/grow/become-a-partner`} className="rounded-full bg-cyan px-4 py-2 text-navy">Apply for this location</Link>
              <button type="button" onClick={() => setSelectedAvailableBranchId("")} className="text-gray-1">Close</button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
