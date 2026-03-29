"use client";

import { JSX } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { headerNavIcons } from "@/utils/navigation";
import { siteConfig } from "@/data/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { ThemeToggle } from "@/components/theme-toggle";

export function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b bg-background px-4 sm:px-6 transition-all duration-300">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="h-10 w-10 text-muted-foreground hover:text-foreground transition-all rounded-xl [&_svg]:size-[22px]" />
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <ThemeToggle />
        {headerNavIcons.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all rounded-full ${
              item.label === "Notifications" ? "bg-[#FAF7F2]" : ""
            }`}
            title={item.label}
          >
            <item.icon className="h-5 w-5" />
            <span className="sr-only">{item.label}</span>
          </Button>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger className="relative h-10 w-10 rounded-full bg-slate-900 text-white ml-1 hover:bg-slate-800 outline-none flex items-center justify-center transition-all shadow-sm ring-2 ring-transparent">
            <Avatar className="h-full w-full">
              <AvatarImage src={siteConfig.user.avatar} alt={siteConfig.user.name} />
              <AvatarFallback className="bg-transparent text-white font-medium select-none text-[16px]">
                {siteConfig.user.name}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 mt-1" align="end">
            <DropdownMenuItem className="text-red-500 font-medium justify-center cursor-pointer">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
