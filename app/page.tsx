"use client";
import "./globals.css";
import StartMenu from "./components/StartMenu";
import Windows from "./components/windows/Windows";
import { createContext, useState } from "react";
import { SoundProvider } from "react-sounds";

export const WindowsContext = createContext({
  openWindows: new Set<string>(),
  setOpenWindows: (windows: Set<string>) => {},
  zIndexMap: {} as Record<string, number>,
  setZIndexMap: (map: Record<string, number>) => {},
});

export default function Home() {
  const [openWindows, setOpenWindows] = useState(new Set<string>());
  const [zIndexMap, setZIndexMap] = useState<Record<string, number>>({});

  return (
    <SoundProvider
      preload={["ui/button_soft_double", "ui/copy"]}
      initialEnabled={true}
    >
      <WindowsContext.Provider
        value={{ openWindows, setOpenWindows, zIndexMap, setZIndexMap }}
      >
        <div className="app flex justify-center">
          <StartMenu />
          <Windows />
        </div>
      </WindowsContext.Provider>
    </SoundProvider>
  );
}
