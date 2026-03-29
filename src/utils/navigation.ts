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
  iconAnimation?: string;
}

export const navigationData: NavItem[] = [
  {
    title: "DASHBOARD",
    url: "/dashboard",
    icon: LayoutDashboard,
    iconAnimation: "hover-icon-pulse",   // breathe / scale pulse
  },
  {
    title: "REPORT",
    url: "/report",
    icon: PieChart,
    iconAnimation: "hover-icon-spin",    // pie spins on hover
  },
  {
    title: "WORK",
    url: "/work",
    icon: BarChart2,
    iconAnimation: "hover-icon-wave",    // bars wave up & down
  },
  {
    title: "TASK",
    url: "/task",
    icon: Briefcase,
    iconAnimation: "hover-icon-swing",   // briefcase swings
  },
  {
    title: "COMMUNITY",
    url: "/community",
    icon: Users,
    iconAnimation: "hover-icon-pop",     // users pop out
  },
];

export const headerNavIcons = [
  { icon: Bell, label: "Notifications" },
  { icon: Mail, label: "Messages" },
  { icon: Settings, label: "Settings" },
];
