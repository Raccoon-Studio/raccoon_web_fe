"use client";

import { Handshake } from "lucide-react";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";

export default function TrackDealsPage() {
  return (
    <ModulePlaceholder 
      title="TRACK DEALS" 
      subtitle="Comprehensive deal management and pipeline tracking" 
      icon={Handshake} 
    />
  );
}
