"use client";
import "./globals.css";
import StartMenu from "./components/StartMenu";
import Windows from "./components/windows/Windows";
import { createContext, useState } from "react";
export const WindowsContext = createContext<{
  openWindows: Set<string>;
  setOpenWindows: React.Dispatch<React.SetStateAction<Set<string>>>;
}>({
  openWindows: new Set(),
  setOpenWindows: () => {},
});

export default function Home() {
  const [openWindows, setOpenWindows] = useState<Set<string>>(new Set());

  return (
    <WindowsContext.Provider value={{ openWindows, setOpenWindows }}>
      <div className="app flex justify-center">
        <StartMenu />
        <Windows />
      </div>
    </WindowsContext.Provider>
  );
}
