"use client";
import { useState } from "react";
import { UserRoundCog, Users, ShieldAlert, ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";
import { DashboardPageHeader, DashboardCard } from "@/components/dashboard/page-components";
import { organizations } from "@/data/mock-data";

export default function GlobalUserManagementPage() {
  return (
    <div className="flex flex-col h-full w-full">
      <DashboardPageHeader 
        title="Personnel Directory" 
        subtitle="Consolidated system oversight and global workforce management" 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <DashboardCard className="bg-foreground text-background">
           <Users size={20} className="opacity-50 mb-4" />
           <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Global Workforce</p>
           <p className="text-3xl font-bold tracking-tighter">
              {organizations.reduce((acc, o) => acc + o.users.length, 0)}
           </p>
        </DashboardCard>
        <DashboardCard>
           <ShieldAlert size={20} className="text-muted-foreground opacity-50 mb-4" />
           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Access Restricted</p>
           <p className="text-3xl font-bold tracking-tighter">
              {organizations.reduce((acc, o) => acc + o.users.filter(u => u.status === 'Block').length, 0)}
           </p>
        </DashboardCard>
        <DashboardCard>
           <Building2 size={20} className="text-muted-foreground opacity-50 mb-4" />
           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Active Entities</p>
           <p className="text-3xl font-bold tracking-tighter">{organizations.length}</p>
        </DashboardCard>
      </div>

      <div className="space-y-6">
         <h3 className="font-bold text-sm uppercase tracking-[0.2em] italic ml-2">Choose Entity to Manage Access</h3>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {organizations.map((org) => (
              <Link 
                key={org.id} 
                href={`/organization/${org.id}/users`}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-foreground transition-all flex items-center justify-between"
              >
                 <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-muted border border-border flex items-center justify-center font-bold text-xs group-hover:scale-105 transition-transform">
                      {org.name[0]}
                    </div>
                    <div>
                       <h4 className="font-bold uppercase tracking-widest text-sm italic" style={{ fontFamily: "Times New Roman" }}>{org.name}</h4>
                       <p className="text-[10px] text-muted-foreground font-bold tracking-tighter mt-0.5">{org.users.length} PERSONNEL AUTHORIZED</p>
                    </div>
                 </div>
                 <ArrowRight size={20} className="text-muted-foreground opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
         </div>
      </div>
    </div>
  );
}

