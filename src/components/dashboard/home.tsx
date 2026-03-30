import { JSX } from "react";
import { DashboardPageHeader, DashboardCard } from "./page-components";
import { TrendingUp, Users, Zap, Briefcase } from "lucide-react";

export function DashboardHome(): JSX.Element {
  return (
    <div className="flex flex-col h-full w-full">
      <DashboardPageHeader 
        title="DASHBOARD OVERVIEW" 
        subtitle="Welcome back, Ankit. Here's what's happening today." 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Revenue", value: "$42.5k", icon: TrendingUp, color: "text-green-500", trend: "+12%" },
          { label: "Active Users", value: "1,240", icon: Users, color: "text-blue-500", trend: "+5%" },
          { label: "Tasks Done", value: "85", icon: Zap, color: "text-amber-500", trend: "+18%" },
          { label: "Open Deals", value: "12", icon: Briefcase, color: "text-purple-500", trend: "0%" },
        ].map((stat, i) => (
          <div key={i} className="bg-card p-6 rounded-2xl border border-border flex flex-col gap-2 hover:shadow-md transition-all group">
             <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg bg-muted/50 ${stat.color}`}>
                   <stat.icon size={20} />
                </div>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-muted ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-muted-foreground'}`}>
                   {stat.trend}
                </span>
             </div>
             <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
           <DashboardCard title="System Performance">
              <div className="h-64 flex items-center justify-center border border-dashed border-border rounded-xl opacity-50 italic text-xs uppercase tracking-widest">
                 Live Feed Visualization...
              </div>
           </DashboardCard>
        </div>
        <div>
           <DashboardCard title="Recent Activity">
              <div className="space-y-4">
                 {[
                   { user: "Alice", action: "Uploaded leads_v2.csv", time: "2m ago" },
                   { user: "Bob", action: "Closed deal #124", time: "15m ago" },
                   { user: "Admin", action: "Updated Email Config", time: "1h ago" },
                 ].map((act, i) => (
                   <div key={i} className="flex gap-3 text-xs">
                      <div className="size-6 rounded-full bg-muted shrink-0" />
                      <div className="flex-1">
                         <span className="font-bold">{act.user}</span>
                         <span className="text-muted-foreground ml-1">{act.action}</span>
                         <p className="text-[10px] text-muted-foreground/60">{act.time}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </DashboardCard>
        </div>
      </div>
    </div>
  );
}
