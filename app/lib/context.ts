import { createContext } from "react";

export const WindowsContext = createContext({
  openWindows: new Set<string>(),
  setOpenWindows: (windows: Set<string>) => {},
  zIndexMap: {} as Record<string, number>,
  setZIndexMap: (map: Record<string, number>) => {},
});
