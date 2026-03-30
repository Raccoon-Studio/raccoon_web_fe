import { JSX } from "react";
import { DashboardPageHeader, DashboardCard } from "./page-components";
import { LucideIcon } from "lucide-react";

interface ModulePlaceholderProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export function ModulePlaceholder({
  title,
  subtitle,
  icon: Icon,
}: ModulePlaceholderProps): JSX.Element {
  return (
    <div className="flex flex-col h-full w-full">
      <DashboardPageHeader 
        title={title} 
        subtitle={subtitle} 
        actions={
          <button className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity uppercase tracking-widest">
             <Icon size={16} />
             GENERATE NEW
          </button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
         {[1, 2, 3].map((i) => (
           <DashboardCard key={i} className="flex flex-col gap-4 text-center items-center py-10 opacity-70 hover:opacity-100 transition-opacity group">
             <div className="size-16 rounded-full bg-muted flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Icon size={32} className="text-muted-foreground" />
             </div>
             <div className="space-y-1">
                <h4 className="font-bold text-sm tracking-widest uppercase">Module Partition {i}</h4>
                <p className="text-[10px] text-muted-foreground font-medium uppercase italic tracking-tighter">Ready for data integration 0{i}</p>
             </div>
             <div className="w-full max-w-[120px] h-1 bg-muted rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-foreground opacity-30 w-1/3" />
             </div>
           </DashboardCard>
         ))}
      </div>

      <DashboardCard className="bg-muted/10 border-dashed animate-pulse">
        <div className="flex flex-col items-center justify-center py-20 gap-4 opacity-40">
           <Icon size={48} className="text-muted-foreground" />
           <p className="text-xs font-bold uppercase tracking-[0.2em]">Deploying System Modules...</p>
        </div>
      </DashboardCard>
    </div>
  );
}
