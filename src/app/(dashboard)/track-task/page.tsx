"use client";

import { ClipboardList } from "lucide-react";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";

export default function TrackTaskPage() {
  return (
    <ModulePlaceholder 
      title="TRACK TASK" 
      subtitle="Monitor and manage all assigned project tasks" 
      icon={ClipboardList} 
    />
  );
}
