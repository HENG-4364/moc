"use client";

import React, { ReactNode } from "react";
import { initializeUserStore} from ".";

interface AppInitializerProps {
  me: any | null;
  children: ReactNode;
}

export default function AppInitializer({ me, children }: AppInitializerProps) {
  // Initialize the store with the user data
  initializeUserStore(me);

  return <>{children}</>;
}