import { JSX } from "react";

interface PagePlaceholderProps {
  title: string;
  subtitle: string;
}

export function PagePlaceholder({ title, subtitle }: PagePlaceholderProps): JSX.Element {
  return (
    <div className="flex bg-card flex-1 items-center justify-center rounded-2xl border border-border shadow-sm min-h-[500px] transition-all hover:shadow-md">
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-3xl font-medium tracking-tight text-foreground text-center uppercase">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm tracking-wide">{subtitle}</p>
      </div>
    </div>
  );
}
