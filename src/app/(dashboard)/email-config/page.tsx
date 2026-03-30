"use client";

import { Settings2 } from "lucide-react";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";

export default function EmailConfigPage() {
  return (
    <ModulePlaceholder 
      title="Email Configuration" 
      subtitle="Manage your email server and outbound settings" 
      icon={Settings2} 
    />
  );
}
