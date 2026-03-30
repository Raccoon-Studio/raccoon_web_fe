export interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "Online" | "Offline" | "Block";
}

export interface Organization {
  id: string;
  name: string;
  logo?: string;
  employees: number;
  status: "Active" | "Inactive";
  founded: string;
  users: User[];
}

export const organizations: Organization[] = [
  {
    id: "org-1",
    name: "Raccoon Studio",
    employees: 42,
    status: "Active",
    founded: "2024",
    users: [
      { id: "u-1", name: "Ankit", email: "ankit@raccoon.com", role: "Admin", status: "Online" },
      { id: "u-2", name: "Alice Johnson", email: "alice@raccoon.com", role: "Editor", status: "Online" },
      { id: "u-3", name: "Bob Smith", email: "bob@raccoon.com", role: "Viewer", status: "Offline" },
    ],
  },
  {
    id: "org-2",
    name: "Tech Solutions",
    employees: 120,
    status: "Active",
    founded: "2020",
    users: [
      { id: "u-4", name: "Jim Beam", email: "jim@tech.com", role: "Admin", status: "Online" },
      { id: "u-5", name: "Sarah Connor", email: "sarah@tech.com", role: "Editor", status: "Block" },
    ],
  },
];

// Legacy exports for backward compatibility
export const organizationData = organizations[0];
export const userData = organizations[0].users;

export const leadsData = [
  { id: 1, company: "Tech Giant", contact: "John Doe", value: "$50k", status: "Cold" },
  { id: 2, company: "StartUp Inc", contact: "Jane Doe", value: "$12k", status: "Warm" },
  { id: 3, company: "Global Corp", contact: "Jim Beam", value: "$250k", status: "Hot" },
];

export const timelineEvents = [
  { id: 1, time: "9:00 AM", title: "Morning Sync", category: "Meeting" },
  { id: 2, time: "11:30 AM", title: "Lead Review", category: "CRM" },
  { id: 3, time: "2:00 PM", title: "Task Generator Test", category: "Dev" },
];
