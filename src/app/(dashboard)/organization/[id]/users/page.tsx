"use client";

import { use, useState, useEffect } from "react";
import { 
  Users, 
  Plus, 
  Trash2, 
  Pencil, 
  Ban, 
  ArrowLeft, 
  ShieldAlert, 
  CheckCircle2, 
  ShieldCheck,
  MoreVertical
} from "lucide-react";
import Link from "next/link";
import { DashboardPageHeader, DashboardCard } from "@/components/dashboard/page-components";
import { organizations, Organization, User } from "@/data/mock-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserManagementProps {
  params: Promise<{ id: string }>;
}

export default function OrgUserManagementPage({ params }: UserManagementProps) {
  const { id } = use(params);
  const [targetOrg, setTargetOrg] = useState<Organization | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  
  // New user form state
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserRole, setNewUserRole] = useState<User["role"]>("Viewer");

  useEffect(() => {
    const org = organizations.find(o => o.id === id);
    if (org) {
      setTargetOrg(org);
      setUsers(org.users);
    }
  }, [id]);

  const handleCreateUser = () => {
    if (!newUserName || !newUserEmail) return;
    const newUser: User = {
      id: `u-${Date.now()}`,
      name: newUserName,
      email: newUserEmail,
      role: newUserRole,
      status: "Online",
    };
    setUsers([...users, newUser]);
    setNewUserName("");
    setNewUserEmail("");
    setIsCreating(false);
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(u => u.id !== userId));
  };

  const handleBlockUser = (userId: string) => {
    setUsers(users.map(u => 
      u.id === userId ? { ...u, status: u.status === "Block" ? "Online" : "Block" } : u
    ));
  };

  if (!targetOrg) return <div className="p-12 text-center font-bold uppercase tracking-widest text-muted-foreground">Loading Entity Access...</div>;

  return (
    <div className="flex flex-col h-full w-full">
      <div className="mb-6">
         <Link href="/organization" className="inline-flex items-center gap-2 text-[10px] font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
            <ArrowLeft size={16} />
            BACK TO ENTITIES
         </Link>
      </div>

      <DashboardPageHeader 
        title={`${targetOrg.name}: USER MGMT`} 
        subtitle={`System access management for ${targetOrg.name} workforce`} 
        actions={
          <button 
            onClick={() => setIsCreating(!isCreating)}
            className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity"
          >
            <Plus size={16} />
            {isCreating ? "CANCEL" : "INDUCT NEW USER"}
          </button>
        }
      />

      {isCreating && (
        <div className="mb-8 p-8 bg-card rounded-2xl border border-border animate-in zoom-in-95 duration-300">
           <h3 className="font-bold text-sm uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <ShieldCheck size={18} />
              NEW USER INDUCTION
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                 <label className="text-[10px] font-bold text-muted-foreground uppercase ml-2 tracking-widest">Full Name</label>
                 <input 
                    className="w-full h-12 bg-muted/60 border border-border rounded-xl px-4 text-sm font-bold tracking-tight outline-none focus:border-foreground transition-all"
                    placeholder="Enter user's name"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                 />
              </div>
              <div className="space-y-1.5">
                 <label className="text-[10px] font-bold text-muted-foreground uppercase ml-2 tracking-widest">Corporation Email</label>
                 <input 
                    className="w-full h-12 bg-muted/60 border border-border rounded-xl px-4 text-sm font-bold tracking-tight outline-none focus:border-foreground transition-all"
                    placeholder="name@corp.com"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                 />
              </div>
              <div className="space-y-1.5">
                 <label className="text-[10px] font-bold text-muted-foreground uppercase ml-2 tracking-widest">System Privilege</label>
                 <select 
                    className="w-full h-12 bg-muted/60 border border-border rounded-xl px-4 text-sm font-bold tracking-tight outline-none focus:border-foreground appearance-none cursor-pointer transition-all"
                    value={newUserRole}
                    onChange={(e) => setNewUserRole(e.target.value as User["role"])}
                 >
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                 </select>
              </div>
           </div>
           <button 
             onClick={handleCreateUser}
             className="mt-8 bg-foreground text-background px-10 h-14 rounded-xl text-xs font-bold uppercase tracking-[0.25em] hover:scale-[1.02] active:scale-[0.98] transition-all"
           >
              FINALIZE INDUCTION
           </button>
        </div>
      )}

      <DashboardCard title={`${targetOrg.name} Authorized Personnel`} className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border text-[10px] uppercase tracking-widest text-muted-foreground font-bold italic">
              <th className="pb-4 px-3">Personnel</th>
              <th className="pb-4 px-3 text-center">Privilege</th>
              <th className="pb-4 px-3 text-center">Status</th>
              <th className="pb-4 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {users.map((user) => (
              <tr key={user.id} className="group hover:bg-muted/40 transition-colors">
                <td className="py-5 px-3">
                   <div className="flex items-center gap-4">
                      <div className="size-11 rounded-full bg-muted border border-border flex items-center justify-center font-bold text-[11px] group-hover:scale-110 transition-transform">
                        {user.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-bold text-sm tracking-tight italic" style={{ fontFamily: "Times New Roman" }}>{user.name}</p>
                        <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase mt-0.5">{user.email}</p>
                      </div>
                   </div>
                </td>
                <td className="py-5 px-3 text-center">
                   <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg border border-border bg-muted/60 text-foreground uppercase tracking-tighter">
                    {user.role}
                   </span>
                </td>
                <td className="py-5 px-3 text-center">
                   <div className="flex items-center justify-center gap-2">
                      <span className={`size-1.5 rounded-full ${user.status === "Online" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"}`} />
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                        {user.status}
                      </span>
                   </div>
                </td>
                <td className="py-5 px-3 text-right">
                  <DropdownMenu>
                     <DropdownMenuTrigger className="p-2 hover:bg-muted rounded-xl transition-all outline-none" title="More Actions">
                        <MoreVertical size={16} className="text-muted-foreground" />
                     </DropdownMenuTrigger>
                     <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem className="cursor-pointer font-bold text-xs uppercase tracking-widest">
                           <Pencil size={14} className="mr-2" />
                           Edit Rights
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleBlockUser(user.id)} className="cursor-pointer font-bold text-xs uppercase tracking-widest">
                           <ShieldAlert size={14} className="mr-2" />
                           {user.status === 'Block' ? "Unblock Access" : "Restrict Access"}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteUser(user.id)} className="text-red-500 hover:text-red-600 focus:text-red-600 cursor-pointer font-bold text-xs uppercase tracking-widest">
                           <Trash2 size={14} className="mr-2" />
                           Revoke Permission
                        </DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DashboardCard>
    </div>
  );
}
