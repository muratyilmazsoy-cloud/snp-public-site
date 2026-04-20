"use client";

import dynamic from "next/dynamic";
import type { LocalizedBranch, LocalizedCountry, LocalizedRegion } from "@/lib/sanity/queries";

const DynamicFranchiseMap = dynamic(
  () => import("@/components/sections/FranchiseMap").then((module) => module.FranchiseMap),
  { ssr: false },
);

export function FranchiseMapLazy({
  branches,
  regions,
  countries,
  title,
  locale,
}: {
  branches: LocalizedBranch[];
  regions: LocalizedRegion[];
  countries: LocalizedCountry[];
  title: string;
  locale: string;
}) {
  return <DynamicFranchiseMap branches={branches} regions={regions} countries={countries} title={title} locale={locale} />;
}
