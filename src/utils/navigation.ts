import {
  LayoutDashboard,
  Building2,
  UserRoundCog,
  UploadCloud,
  PieChart,
  Users,
  Video,
  ClipboardList,
  TrendingUp,
  Zap,
  Settings2,
  Briefcase,
  UserPlus,
  Calendar,
  Bell,
  Mail,
  Settings,
  LucideIcon,
  Handshake,
  GitCommit,
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
    iconAnimation: "hover-icon-pulse",
  },
  {
    title: "ORGANIZATION",
    url: "/organization",
    icon: Building2,
    iconAnimation: "hover-icon-pop",
  },
  {
    title: "USER MANAGEMENT",
    url: "/user-management",
    icon: UserRoundCog,
    iconAnimation: "hover-icon-pulse",
  },
  {
    title: "DATA UPLOAD",
    url: "/data-upload",
    icon: UploadCloud,
    iconAnimation: "hover-icon-wave",
  },
  {
    title: "REPORT",
    url: "/report",
    icon: PieChart,
    iconAnimation: "hover-icon-spin",
  },
  {
    title: "COMMUNITY",
    url: "/community",
    icon: Users,
    iconAnimation: "hover-icon-pop",
  },
  {
    title: "MEET",
    url: "/meet",
    icon: Video,
    iconAnimation: "hover-icon-swing",
  },
  {
    title: "TRACK TASK",
    url: "/track-task",
    icon: ClipboardList,
    iconAnimation: "hover-icon-pulse",
  },
  {
    title: "TRACK DEALS",
    url: "/track-deals",
    icon: Handshake,
    iconAnimation: "hover-icon-wave",
  },
  {
    title: "TASK GENERATOR",
    url: "/task-generator",
    icon: Zap,
    iconAnimation: "hover-icon-spin",
  },
  {
    title: "EMAIL CONFIG",
    url: "/email-config",
    icon: Settings2,
    iconAnimation: "hover-icon-swing",
  },

  {
    title: "CRM",
    url: "/crm",
    icon: Briefcase,
    iconAnimation: "hover-icon-pulse",
  },
  {
    title: "LEADS",
    url: "/leads",
    icon: UserPlus,
    iconAnimation: "hover-icon-pop",
  },
  {
    title: "TIMELINE",
    url: "/timeline",
    icon: Calendar,
    iconAnimation: "hover-icon-pulse",
  },
];

export const headerNavIcons = [
  { icon: Bell, label: "Notifications" },
  { icon: Mail, label: "Messages" },
  { icon: Settings, label: "Settings" },
];

