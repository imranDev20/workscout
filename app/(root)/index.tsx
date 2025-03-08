import { Redirect } from "expo-router";

export default function Index() {
  // Option 1: Redirect to the index file within your tabs
  return <Redirect href="/(root)/(tabs)" />;
}
