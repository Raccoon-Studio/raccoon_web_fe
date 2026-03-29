import { useState } from "react";

export function useDashboardState(): { isReady: boolean } {
  const [isReady] = useState(true);

  return { isReady };
}
