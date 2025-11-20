import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
  DMSans_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/dm-sans";
import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  const [loaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
    DMSans_800ExtraBold,
  });
  if (!loaded) return null;
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen
        name="Others/notifications"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="articlesPage/page" options={{ headerShown: false }} />
      <Stack.Screen name="profilePage/page" options={{ headerShown: false }} />
      <Stack.Screen name="commentsPage/page" options={{ headerShown: false }} />
      <Stack.Screen name="newPost/page" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
