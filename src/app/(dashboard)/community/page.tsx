"use client";

import { Users } from "lucide-react";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";

export default function CommunityPage() {
  return (
    <ModulePlaceholder 
      title="Community Exchange" 
      subtitle="Connect and collaborate with other Raccoon Studio users" 
      icon={Users} 
    />
  );
}
