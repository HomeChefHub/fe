import { color, font } from "../constants/constants";
import RecommendedRecipesScreen from "../screens/Home/RecommendedRecipes";
import LikeRecipesScreen from "../screens/Home/LikeRecipes";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function HomeTopTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.brand.primary,
        tabBarInactiveTintColor: color.text.primary,
        tabBarLabelStyle: { fontSize: font.title.md, fontWeight: "bold" },
        tabBarIndicatorStyle: { backgroundColor: color.brand.primary },
      }}
    >
      <Tab.Screen name="추천 레시피" component={RecommendedRecipesScreen} />
      <Tab.Screen name="찜한 레시피" component={LikeRecipesScreen} />
    </Tab.Navigator>
  );
}
