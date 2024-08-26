import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Provider as ReduxProvider } from "react-redux";
import { ApolloProvider } from "@apollo/client";

import client from "@/utils/graphql/apollo-client";
import store from "@/store/store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto-Variable.ttf"),
    RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
    Inter: require("../assets/fonts/Inter-Variable.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }} />
          <Stack.Screen name='applyLoan' options={{ headerShown: false }} />
        </Stack>
      </ReduxProvider>
    </ApolloProvider>
  );
}
