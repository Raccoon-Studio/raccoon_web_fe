"use client";

import { Zap } from "lucide-react";
import { ModulePlaceholder } from "@/components/dashboard/module-placeholder";

export default function TaskGeneratorPage() {
  return (
    <ModulePlaceholder 
      title="Task Generator" 
      subtitle="Automate task creation based on criteria" 
      icon={Zap} 
    />
  );
}
