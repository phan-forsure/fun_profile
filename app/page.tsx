"use client";
import "./globals.css";
import StartMenu from "./components/StartMenu";
import Windows from "./components/windows/Windows";
import { useState } from "react";
import { SoundProvider } from "react-sounds";
import { WindowsContext } from "./lib/context";

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
