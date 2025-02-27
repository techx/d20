import { useEffect } from "react";
import { Stack } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar"

export default function RootLayout() {
  useEffect(() => { setStatusBarStyle("dark", true); }, []);

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
