"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Building2, Plus, ArrowRight, TrendingUp, Users } from "lucide-react";
import { DashboardPageHeader, DashboardCard } from "@/components/dashboard/page-components";
import { organizations as initialOrganizations, Organization } from "@/data/mock-data";

export default function OrganizationPage() {
  const router = useRouter();
  const [organizations, setOrganizations] = useState<Organization[]>(initialOrganizations);
  const [newOrgName, setNewOrgName] = useState("");
  const [newOrgLogo, setNewOrgLogo] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewOrgLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreate = () => {
    if (!newOrgName) return;
    const newOrg: Organization = {
      id: `org-${Date.now()}`,
      name: newOrgName,
      logo: newOrgLogo || undefined,
      employees: 0,
      status: "Active",
      founded: new Date().getFullYear().toString(),
      users: [],
    };
    setOrganizations([...organizations, newOrg]);
    setNewOrgName("");
    setNewOrgLogo(null);
    setIsCreating(false);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <DashboardPageHeader 
        title="Organizations" 
        subtitle="Manage corporate entities and entity-specific users" 
        actions={
          <button 
            onClick={() => setIsCreating(!isCreating)}
            className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity"
          >
            <Plus size={16} />
            {isCreating ? "CANCEL" : "CREATE ORGANIZATION"}
          </button>
        }
      />

      {isCreating && (
        <div className="mb-8 p-6 bg-card rounded-2xl border border-border animate-in fade-in slide-in-from-top-4 duration-300">
           <h3 className="font-bold text-sm uppercase tracking-widest mb-4">New Organization Details</h3>
           <div className="flex gap-4">
              <div className="flex items-center gap-2">
                 {newOrgLogo && <img src={newOrgLogo} alt="Logo preview" className="size-12 rounded-xl object-cover border border-border" />}
                 <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                    id="logo-upload"
                 />
                 <label 
                    htmlFor="logo-upload"
                    className="flex items-center justify-center shrink-0 h-12 px-4 bg-muted border border-border rounded-xl text-xs font-bold cursor-pointer hover:bg-muted/80 transition-all uppercase tracking-widest"
                 >
                    UPLOAD LOGO
                 </label>
              </div>
              <input 
                type="text"
                placeholder="Organization Name (e.g. Acme Corp)"
                value={newOrgName}
                onChange={(e) => setNewOrgName(e.target.value)}
                className="flex-1 h-12 bg-muted border border-border rounded-xl px-4 text-sm font-bold tracking-tight outline-none focus:border-foreground transition-all"
              />
              <button 
                onClick={handleCreate}
                className="bg-foreground text-background px-8 h-12 rounded-xl text-xs font-bold uppercase tracking-widest"
              >
                SAVE ENTITY
              </button>
           </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center uppercase tracking-widest">
         {[
           { label: "Total Entities", value: organizations.length, icon: Building2 },
           { label: "Active Status", value: organizations.filter(o => o.status === "Active").length, icon: TrendingUp },
           { label: "Total Workforce", value: organizations.reduce((acc, o) => acc + o.employees, 0), icon: Users },
         ].map((stat, i) => (
           <DashboardCard key={i} className="flex flex-col py-6 items-center">
              <stat.icon className="text-muted-foreground mb-4" size={20} />
              <p className="text-[10px] font-bold text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold mt-1 tracking-tighter">{stat.value}</p>
           </DashboardCard>
         ))}
      </div>

      <DashboardCard title="Active Entities List" className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
              <th className="pb-4 px-2">Organization</th>
              <th className="pb-4 px-2">Status</th>
              <th className="pb-4 px-2">Members</th>
              <th className="pb-4 px-2">Established</th>
              <th className="pb-4 px-2 text-right">User Access</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {organizations.map((org) => (
              <tr 
                key={org.id} 
                onClick={() => router.push(`/organization/${org.id}/users`)}
                className="group hover:bg-muted/30 transition-colors cursor-pointer"
              >
                <td className="py-5 px-2">
                   <div className="flex items-center gap-3">
                      {org.logo ? (
                        <img src={org.logo} alt={org.name} className="size-10 rounded-xl object-cover ring-4 ring-muted group-hover:ring-foreground/20 transition-all" />
                      ) : (
                        <div className="size-10 rounded-xl bg-foreground flex items-center justify-center text-background font-bold text-xs ring-4 ring-muted group-hover:ring-foreground/20 transition-all">
                          {org.name[0]}
                        </div>
                      )}
                      <p className="font-bold text-sm tracking-tight uppercase italic" style={{ fontFamily: "Times New Roman" }}>{org.name}</p>
                   </div>
                </td>
                <td className="py-5 px-2">
                   <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200 bg-green-50 text-green-600 uppercase">
                    {org.status}
                   </span>
                </td>
                <td className="py-5 px-2 font-bold text-sm">{org.employees || org.users.length}</td>
                <td className="py-5 px-2 italic text-sm text-muted-foreground">{org.founded}</td>
                <td className="py-5 px-2 text-right">
                  <div 
                    className="inline-flex items-center justify-center size-10 rounded-xl bg-muted border border-border hover:bg-foreground hover:text-background transition-all group/btn"
                  >
                     <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DashboardCard>
    </div>
  );
}
