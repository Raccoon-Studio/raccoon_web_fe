import { JSX } from "react";
import { cn } from "@/lib/utils";

interface DashboardPageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

export function DashboardPageHeader({
  title,
  subtitle,
  actions,
}: DashboardPageHeaderProps): JSX.Element {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="text-muted-foreground text-sm tracking-wide mt-1">
            {subtitle}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-3 mt-4 md:mt-0">{actions}</div>}
    </div>
  );
}

export function DashboardCard({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={cn(
        "bg-card rounded-2xl border border-border shadow-sm overflow-hidden",
        className
      )}
    >
      {title && (
        <div className="px-6 py-4 border-b border-border bg-muted/30">
          <h3 className="font-semibold text-sm uppercase tracking-wider">{title}</h3>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
