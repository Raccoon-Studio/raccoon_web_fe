"use client";

import { JSX } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { headerNavIcons } from "@/utils/navigation";
import { siteConfig } from "@/data/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-sidebar-border/60 bg-sidebar px-4 sm:px-6 transition-all duration-300">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-2 h-10 w-10 text-sidebar-foreground/70 hover:text-sidebar-foreground transition-all rounded-xl [&_svg]:size-[22px]" />
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <ThemeToggle />
        <div className="flex items-center gap-1">
          {headerNavIcons.map((item, index) => {
            const isNotification = item.label === "Notifications";
            return (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="relative h-10 w-10 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all rounded-full"
                title={item.label}
              >
                <item.icon className="h-[20px] w-[20px]" />
                {isNotification && (
                  <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-destructive ring-2 ring-sidebar" />
                )}
                <span className="sr-only">{item.label}</span>
              </Button>
            );
          })}
        </div>

        <div className="h-6 w-px bg-sidebar-border/60 mx-1 hidden sm:block" />

        <DropdownMenu>
          <DropdownMenuTrigger className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-sidebar-accent select-none outline-hidden flex items-center justify-center transition-all shadow-xs ring-1 ring-sidebar-border hover:ring-white/20">
            <Avatar className="h-full w-full">
              <AvatarImage src={siteConfig.user.avatar} alt={siteConfig.user.name} />
              <AvatarFallback className="bg-transparent text-sidebar-foreground font-semibold text-[14px]">
                {siteConfig.user.name?.substring(0, 2).toUpperCase() || "RS"}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44 mt-2" align="end">
            <DropdownMenuItem className="text-destructive font-medium cursor-pointer">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
