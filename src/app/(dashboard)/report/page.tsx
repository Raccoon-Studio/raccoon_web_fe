"use client";

import { PieChart, Download, Filter, RefreshCcw } from "lucide-react";
import { DashboardPageHeader, DashboardCard } from "@/components/dashboard/page-components";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line
} from "recharts";

const data = [
  { name: 'Jan', value: 4000, leads: 2400 },
  { name: 'Feb', value: 3000, leads: 1398 },
  { name: 'Mar', value: 2000, leads: 9800 },
  { name: 'Apr', value: 2780, leads: 3908 },
  { name: 'May', value: 1890, leads: 4800 },
  { name: 'Jun', value: 2390, leads: 3800 },
  { name: 'Jul', value: 3490, leads: 4300 },
];

export default function ReportPage() {
  return (
    <div className="flex flex-col h-full w-full">
      <DashboardPageHeader 
        title="Analytical Reports" 
        subtitle="In-depth analytics and performance data" 
        actions={
          <div className="flex gap-3">
             <button className="p-2 bg-muted rounded-xl hover:bg-muted/70 transition-colors">
                <RefreshCcw size={16} />
             </button>
             <button className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity">
                <Download size={16} />
                DOWNLOAD REPORT
             </button>
          </div>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Overall Rating", value: "94.2%", trend: "+2.4%" },
          { label: "Lead Conversion", value: "11.8%", trend: "-0.5%" },
          { label: "Avg. Duration", value: "4m 12s", trend: "+12s" },
        ].map((stat, i) => (
          <div key={i} className="bg-card p-6 rounded-2xl border border-border flex flex-col gap-1">
             <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</span>
             <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className={`text-[10px] font-bold ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{stat.trend}</span>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <DashboardCard title="Activity Trends">
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--foreground)" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="var(--foreground)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 10, fontWeight: 'bold'}}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 10, fontWeight: 'bold'}}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      borderColor: 'hsl(var(--border))',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }} 
                  />
                  <Area type="monotone" dataKey="value" stroke="var(--foreground)" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
               </AreaChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>

        <DashboardCard title="Lead Distribution">
           <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 10, fontWeight: 'bold'}}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: 'hsl(var(--muted-foreground))', fontSize: 10, fontWeight: 'bold'}}
                  />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      borderColor: 'hsl(var(--border))',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }} 
                  />
                  <Bar dataKey="leads" fill="var(--foreground)" radius={[4, 4, 0, 0]} />
               </BarChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}
