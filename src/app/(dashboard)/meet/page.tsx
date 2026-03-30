"use client";

import { Video } from "lucide-react";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";

export default function MeetPage() {
  return (
    <ModulePlaceholder 
      title="Raccoon: MEET" 
      subtitle="Virtual conferencing and real-time collaboration" 
      icon={Video} 
    />
  );
}
