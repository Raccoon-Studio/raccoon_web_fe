"use client";

import { JSX } from "react";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { navigationData } from "@/utils/navigation";
import { siteConfig } from "@/data/config";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>): JSX.Element {
  const pathname = usePathname();

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-sidebar-border/60"
      {...props}
    >
      {/* ── Header / Brand ── */}
      <SidebarHeader
        className="
          flex flex-row items-center gap-3 px-5 h-auto
          group-data-[collapsible=icon]:px-0
          group-data-[collapsible=icon]:justify-center
          group-data-[collapsible=icon]:w-full
        "
      >
        {/* Glassy logo tile */}
        <div
          className="
            relative flex h-9 w-9 shrink-0 items-center justify-center
            rounded-lg text-lg font-bold text-background
            bg-foreground/90
            ring-1 ring-white/10
            shadow-[0_4px_16px_-2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.12)]
          "
        >
          {siteConfig.logo.primary}
        </div>

        <div className="flex flex-col leading-none group-data-[collapsible=icon]:hidden">
          <span className="font-bold text-[15px] tracking-tight text-sidebar-foreground uppercase">
            {siteConfig.shortName}
          </span>
          <span className="text-[10px] tracking-widest font-semibold text-sidebar-foreground/40 uppercase mt-0.5">
            {siteConfig.subTitle}
          </span>
        </div>
      </SidebarHeader>

      {/* ── Navigation ── */}
      <SidebarContent
        className="
          px-3 pt-10
          group-data-[collapsible=icon]:px-2
        "
      >
        <SidebarGroup className="group-data-[collapsible=icon]:p-0">
          <SidebarMenu className="gap-2 group-data-[collapsible=icon]:items-center">
            {navigationData.map((item) => {
              const isActive = pathname === item.url;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    render={<Link href={item.url} />}
                    isActive={isActive}
                    tooltip={item.title}
                    className={cn(
                      // Base
                      "relative h-10 px-3 rounded-lg",
                      "text-[15px] font-medium tracking-wide",
                      "transition-all duration-200",
                      // Override shadcn's [&_svg]:size-4 to keep icons at size-5
                      "[&_svg]:size-5! [&_svg]:shrink-0",
                      // Inactive
                      "text-sidebar-foreground/50",
                      "hover:text-sidebar-foreground hover:bg-sidebar-accent/60",

                      // ── Expanded: active — dark glass, no blue bg ──
                      isActive && [
                        "text-sidebar-foreground font-semibold",
                        "bg-foreground/[0.07]",
                        "ring-1 ring-white/10",
                        "shadow-[0_2px_12px_-2px_rgba(0,0,0,0.25)]",
                      ],

                      // ── Collapsed: icon-only mode ──
                      // Use !important to override shadcn's size-8! and p-2!
                      "group-data-[collapsible=icon]:h-10!",
                      "group-data-[collapsible=icon]:w-10!",
                      "group-data-[collapsible=icon]:p-0!",
                      "group-data-[collapsible=icon]:flex",
                      "group-data-[collapsible=icon]:items-center",
                      "group-data-[collapsible=icon]:justify-center",
                      "group-data-[collapsible=icon]:mx-auto",
                      "group-data-[collapsible=icon]:rounded-xl",

                      // ── Collapsed + active: dark glass tile ──
                      isActive && [
                        "group-data-[collapsible=icon]:bg-foreground/10",
                        "group-data-[collapsible=icon]:text-sidebar-foreground",
                        "group-data-[collapsible=icon]:ring-1",
                        "group-data-[collapsible=icon]:ring-white/15",
                        "group-data-[collapsible=icon]:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]",
                      ],
                    )}
                  >
                    <span className={cn("inline-flex shrink-0", item.iconAnimation)}>
                      <item.icon className="size-5" />
                    </span>
                    <span className="group-data-[collapsible=icon]:hidden truncate">
                      {item.title}
                    </span>

                    {/* Active left accent bar — expanded only */}
                    {isActive && (
                      <span
                        className="
                          absolute left-0 top-1/2 -translate-y-1/2
                          w-[3px] h-5 rounded-r-full bg-sidebar-primary
                          group-data-[collapsible=icon]:hidden
                        "
                        aria-hidden="true"
                      />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}