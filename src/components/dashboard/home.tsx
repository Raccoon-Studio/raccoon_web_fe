import { JSX } from "react";
import { PagePlaceholder } from "./page-placeholder";

export function DashboardHome(): JSX.Element {
  return (
    <DashboardHomeContent />
  );
}

function DashboardHomeContent(): JSX.Element {
  return (
    <PagePlaceholder
      title="home screen"
      subtitle="Welcome back to Raccoon Studio."
    />
  );
}
