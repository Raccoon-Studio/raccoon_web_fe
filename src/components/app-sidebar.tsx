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
      className="border-r border-sidebar-border/40"
      {...props}
    >
      {/* ── Header / Brand ── */}
      <SidebarHeader
        className="
          flex flex-row items-center gap-3 px-5 py-5
          group-data-[collapsible=icon]:px-0
          group-data-[collapsible=icon]:justify-center
          group-data-[collapsible=icon]:py-4
        "
      >
        <div
          className="
            relative flex h-9 w-9 shrink-0 items-center justify-center
            rounded-lg text-lg font-bold
            bg-sidebar-foreground text-sidebar
            shadow-sm
            transition-transform duration-200
            group-data-[collapsible=icon]:h-8
            group-data-[collapsible=icon]:w-8
            group-data-[collapsible=icon]:text-base
          "
        >
          {siteConfig.logo.primary}
        </div>

        <div className="flex flex-col leading-none group-data-[collapsible=icon]:hidden">
          <span className="font-bold text-[15px] tracking-tight text-sidebar-foreground uppercase">
            {siteConfig.shortName}
          </span>
          <span className="text-[10px] tracking-widest font-semibold text-sidebar-foreground/35 uppercase mt-0.5">
            {siteConfig.subTitle}
          </span>
        </div>
      </SidebarHeader>

      {/* ── Navigation ── */}
      <SidebarContent
        className="
          px-3 pt-6
          group-data-[collapsible=icon]:px-1.5
          group-data-[collapsible=icon]:pt-4
        "
      >
        <SidebarGroup className="group-data-[collapsible=icon]:p-0">
          <SidebarMenu className="gap-1.5 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:gap-2">
            {navigationData.map((item) => {
              const isActive = pathname === item.url;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    render={<Link href={item.url} />}
                    isActive={isActive}
                    tooltip={item.title}
                    className={cn(
                      // ── Base ──
                      "relative h-10 px-3 rounded-lg",
                      "text-[13px] font-medium tracking-wide",
                      "transition-colors duration-150 ease-out",
                      "[&_svg]:size-5! [&_svg]:shrink-0",

                      // ── Inactive ──
                      "text-sidebar-foreground/45",
                      "hover:text-sidebar-foreground/80",
                      "hover:bg-sidebar-foreground/[0.04]",

                      // ── Expanded active ──
                      isActive && [
                        "text-sidebar-foreground font-semibold",
                        "bg-sidebar-foreground/[0.06]",
                        "border border-sidebar-border/60",
                        "hover:bg-sidebar-foreground/[0.08]",
                      ],

                      // ── Collapsed: icon-only ──
                      "group-data-[collapsible=icon]:h-10!",
                      "group-data-[collapsible=icon]:w-10!",
                      "group-data-[collapsible=icon]:p-0!",
                      "group-data-[collapsible=icon]:flex",
                      "group-data-[collapsible=icon]:items-center",
                      "group-data-[collapsible=icon]:justify-center",
                      "group-data-[collapsible=icon]:mx-auto",
                      "group-data-[collapsible=icon]:rounded-xl",

                      // ── Collapsed active ──
                      isActive && [
                        "group-data-[collapsible=icon]:bg-sidebar-foreground/[0.08]",
                        "group-data-[collapsible=icon]:text-sidebar-foreground",
                        "group-data-[collapsible=icon]:border",
                        "group-data-[collapsible=icon]:border-sidebar-border/60",
                        "group-data-[collapsible=icon]:shadow-sm",
                      ],
                    )}
                  >
                    <span className={cn("inline-flex shrink-0", item.iconAnimation)}>
                      <item.icon className="size-5" />
                    </span>
                    <span className="group-data-[collapsible=icon]:hidden truncate">
                      {item.title}
                    </span>

                    {/* Active accent bar — expanded only */}
                    {isActive && (
                      <span
                        className="
                          absolute left-0 top-1/2 -translate-y-1/2
                          w-[2.5px] h-5 rounded-r-full
                          bg-sidebar-foreground/70
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