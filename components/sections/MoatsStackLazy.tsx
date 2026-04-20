"use client";

import dynamic from "next/dynamic";
import type { LocalizedMoatsPage } from "@/lib/sanity/queries";

const DynamicMoatsStack = dynamic(
  () => import("@/components/sections/MoatsStack").then((module) => module.MoatsStack),
  { ssr: false },
);

export function MoatsStackLazy({ items }: { items: LocalizedMoatsPage["items"] }) {
  return <DynamicMoatsStack items={items} />;
}
