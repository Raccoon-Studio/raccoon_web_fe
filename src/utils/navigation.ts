import {
  Home,
  PieChart,
  BarChart2,
  Briefcase,
  Users,
  LucideIcon,
  Bell,
  Mail,
  Settings,
  LayoutDashboard,
} from "lucide-react";

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
}

export const navigationData: NavItem[] = [
  {
    title: "DASHBOARD",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "REPORT",
    url: "/report",
    icon: PieChart,
  },
  {
    title: "WORK",
    url: "/work",
    icon: BarChart2,
  },
  {
    title: "TASK",
    url: "/task",
    icon: Briefcase,
  },
  {
    title: "COMMUNITY",
    url: "/community",
    icon: Users,
  },
];

export const headerNavIcons = [
  { icon: Bell, label: "Notifications" },
  { icon: Mail, label: "Messages" },
  { icon: Settings, label: "Settings" },
];
