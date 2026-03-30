"use client";

import { UploadCloud, FileText, CheckCircle2, History, Trash2 } from "lucide-react";
import { DashboardPageHeader, DashboardCard } from "@/components/dashboard/page-components";

export default function DataUploadPage() {
  return (
    <div className="flex flex-col h-full w-full">
      <DashboardPageHeader 
        title="Data Upload" 
        subtitle="Securely upload and process your data files" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <DashboardCard title="Dropzone">
            <div className="h-64 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center p-8 bg-muted/20 hover:bg-muted/40 transition-colors group">
              <div className="size-16 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform">
                <UploadCloud size={32} className="text-muted-foreground" />
              </div>
              <p className="mt-4 font-bold text-sm tracking-widest uppercase">Click or Drag to Upload</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium italic">Supports CSV, JSON, and XML (Max 50MB)</p>
            </div>
          </DashboardCard>

          <DashboardCard title="Active Uploads">
            <div className="space-y-4">
              {[
                { name: "leads_v2.csv", size: "12.4 MB", progress: 65 },
                { name: "organization_profile.json", size: "1.2 MB", progress: 100 },
              ].map((file, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                   <div className="p-2 rounded-lg bg-muted">
                      <FileText size={20} className="text-muted-foreground" />
                   </div>
                   <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-tighter">
                         <span>{file.name}</span>
                         <span className="text-muted-foreground">{file.size}</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div className={`h-full ${file.progress === 100 ? "bg-green-500" : "bg-foreground"} transition-all duration-500`} style={{ width: `${file.progress}%` }} />
                      </div>
                   </div>
                   {file.progress === 100 && <CheckCircle2 size={16} className="text-green-500 shrink-0" />}
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>

        <div className="space-y-8">
           <DashboardCard title="History">
              <div className="space-y-6">
                 {[
                   { date: "Yesterday, 4:30 PM", file: "report_march.pdf", status: "Success" },
                   { date: "Mar 28, 10:15 AM", file: "users_backup.csv", status: "Success" },
                 ].map((hist, i) => (
                   <div key={i} className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">{hist.date}</span>
                      <div className="flex items-center justify-between">
                         <span className="text-sm font-bold truncate pr-4">{hist.file}</span>
                         <button className="text-muted-foreground hover:text-red-500 transition-colors">
                           <Trash2 size={14} />
                         </button>
                      </div>
                   </div>
                 ))}
                 <button className="w-full py-2 text-[10px] font-bold text-muted-foreground hover:text-foreground border border-dashed border-border rounded-lg transition-all uppercase tracking-widest mt-4">
                    VIEW FULL HISTORY
                 </button>
              </div>
           </DashboardCard>
        </div>
      </div>
    </div>
  );
}
