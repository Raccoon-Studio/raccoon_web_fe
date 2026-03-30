"use client";

import { UserPlus, Filter, DownloadCloud, MoreVertical } from "lucide-react";
import { DashboardPageHeader, DashboardCard } from "@/components/dashboard/page-components";
import { leadsData } from "@/data/mock-data";

export default function LeadsPage() {
  return (
    <div className="flex flex-col h-full w-full">
      <DashboardPageHeader 
        title="CRM: LEADS" 
        subtitle="Manage and track potential client leads" 
        actions={
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 bg-muted/60 border border-border text-foreground px-4 py-2 rounded-xl text-xs font-bold hover:bg-muted transition-colors">
                <DownloadCloud size={16} />
                EXPORT CSV
             </button>
             <button className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity">
                <UserPlus size={16} />
                NEW LEAD
             </button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Total Leads", value: leadsData.length, color: "text-blue-500" },
          { label: "Hot Leads", value: leadsData.filter(l => l.status === "Hot").length, color: "text-red-500" },
          { label: "Avg. Value", value: "$104k", color: "text-green-500" },
        ].map((stat, i) => (
          <div key={i} className="bg-card p-6 rounded-2xl border border-border flex flex-col gap-1">
             <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</span>
             <span className={`text-3xl font-bold ${stat.color} transition-all`}>{stat.value}</span>
          </div>
        ))}
      </div>

      <DashboardCard title="Current Leads List" className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
              <th className="pb-4 px-2">Company</th>
              <th className="pb-4 px-2">Contact</th>
              <th className="pb-4 px-2">Value</th>
              <th className="pb-4 px-2">Status</th>
              <th className="pb-4 px-2 text-right pr-0">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {leadsData.map((lead) => (
              <tr key={lead.id} className="group hover:bg-muted/30 transition-colors">
                <td className="py-4 px-2 font-bold tracking-tight text-sm uppercase">{lead.company}</td>
                <td className="py-4 px-2 italic text-sm font-medium text-muted-foreground">{lead.contact}</td>
                <td className="py-4 px-2 font-bold text-foreground/80">{lead.value}</td>
                <td className="py-4 px-2">
                   <div className="flex items-center gap-2">
                      <span className={cn(
                        "text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-widest uppercase",
                        lead.status === "Hot" ? "bg-red-50 text-red-600 border-red-200" :
                        lead.status === "Warm" ? "bg-orange-50 text-orange-600 border-orange-200" :
                        "bg-blue-50 text-blue-600 border-blue-200"
                      )}>
                        {lead.status}
                      </span>
                   </div>
                </td>
                <td className="py-4 px-2 text-right pr-0">
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <MoreVertical size={16} className="text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DashboardCard>
    </div>
  );
}

// Inline helper for status colors
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
