import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ flex: 1 }}
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="vehicles" />
      </Stack>
    </SafeAreaView>
  );
}