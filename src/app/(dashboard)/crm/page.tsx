"use client";

import { Briefcase } from "lucide-react";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";

export default function CRMPage() {
  return (
    <ModulePlaceholder 
      title="Raccoon: CRM" 
      subtitle="Comprehensive Customer Relationship Management" 
      icon={Briefcase} 
    />
  );
}
