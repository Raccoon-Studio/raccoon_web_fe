"use client";

import { Calendar, Search, Filter, MessageCircle } from "lucide-react";
import { DashboardPageHeader, DashboardCard } from "@/components/dashboard/page-components";
import { timelineEvents } from "@/data/mock-data";

export default function TimelinePage() {
  return (
    <div className="flex flex-col h-full w-full">
      <DashboardPageHeader 
        title="Timeline" 
        subtitle="Track activities and scheduling" 
        actions={
          <button className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-xl text-xs font-bold hover:opacity-90 transition-opacity">
            <Calendar size={16} />
            NEW EVENT
          </button>
        }
      />

      <div className="flex flex-col gap-8 max-w-4xl mx-auto w-full">
        <div className="relative border-l border-border ml-4 py-8 space-y-12">
          {timelineEvents.map((event, i) => (
            <div key={event.id} className="relative pl-10 group">
               {/* Timeline Dot */}
               <div className="absolute left-[-5px] top-1 size-[10px] rounded-full bg-border border border-muted ring-4 ring-background group-hover:scale-125 group-hover:bg-foreground group-hover:ring-muted/50 transition-all duration-300" />
               
               <div className="flex flex-col bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all group-hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-2">
                     <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">{event.time}</span>
                     <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-border tracking-wider italic uppercase">
                        {event.category}
                     </span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight mb-2 uppercase italic" style={{ fontFamily: "Times New Roman" }}>
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    Event details for {event.title} in category {event.category}. This event marks a milestone in the current project progress.
                  </p>
                  
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border/50">
                     <div className="size-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold ring-1 ring-border">AJ</div>
                     <button className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors ml-auto">
                        <MessageCircle size={14} />
                        2 COMMENTS
                     </button>
                  </div>
               </div>
            </div>
          ))}
          
          {/* END DOT */}
          <div className="absolute bottom-[-5px] left-[-5px] size-[10px] rounded-full bg-border opacity-50" />
        </div>
      </div>
    </div>
  );
}
