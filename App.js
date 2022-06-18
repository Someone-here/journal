import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigator } from "./navigation/RootNavigator";
import { AuthenticatedUserProvider } from "./providers";
import { StatusBar } from "expo-status-bar";
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    secondary: "#f1c40f",
    tertiary: "#a1b2c3",
  },
};

const App = () => {
  return (
    <>
      <AuthenticatedUserProvider>
        <SafeAreaProvider>
          <PaperProvider theme={theme}>
            <RootNavigator />
          </PaperProvider>
        </SafeAreaProvider>
      </AuthenticatedUserProvider>
      <StatusBar style="dark" />
    </>
  );
};

export default App;
