import { NavigationContainer } from "@react-navigation/native";
import BottomTabBar from "./src/navigations/BottomTabBar";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabBar />
    </NavigationContainer>
  );
}
