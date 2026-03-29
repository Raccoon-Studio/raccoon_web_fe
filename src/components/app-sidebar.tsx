"use client";

import { JSX } from "react";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      className="border-r transition-colors duration-300"
      {...props}
    >
      <SidebarHeader className="flex flex-row items-center gap-3 px-6 h-20 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center font-sans">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-foreground text-[28px] font-bold transition-all duration-300 font-sans">
          {siteConfig.logo.primary}
        </div>
        <div className="flex flex-col gap-0 leading-none group-data-[collapsible=icon]:hidden font-sans">
          <span className="font-bold text-[18px] tracking-tight text-foreground uppercase">
            {siteConfig.shortName}
          </span>
          <span className="text-[10px] tracking-[0.1em] font-semibold text-muted-foreground uppercase">
            {siteConfig.subTitle}
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3 py-6 group-data-[collapsible=icon]:px-0">
        <SidebarGroup className="group-data-[collapsible=icon]:p-0">
          <SidebarMenu className="gap-4">
            {navigationData.map((item) => {
              const isActive = pathname === item.url || item.isActive;
              return (
                <SidebarMenuItem key={item.title} className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
                  <SidebarMenuButton
                    render={<Link href={item.url} />}
                    isActive={isActive}
                    tooltip={item.title}
                    className="h-10 px-3 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-lg 
                      group-data-[collapsible=icon]:size-auto group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center border border-transparent
                      data-active:bg-primary/10 data-active:text-primary data-active:font-semibold 
                      hover:bg-muted/80 hover:text-foreground
                      text-muted-foreground
                      group-data-[collapsible=icon]:data-active:h-12! group-data-[collapsible=icon]:data-active:w-12! group-data-[collapsible=icon]:data-active:rounded-[14px]!
                      relative"
                  >
                    <item.icon className="mr-3 size-[22px] group-data-[collapsible=icon]:mr-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                    {/* Optional: Active Indicator Line */}
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-primary rounded-r-full group-data-[collapsible=icon]:block hidden" />
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
