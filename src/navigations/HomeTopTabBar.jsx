import {color, font, spacing} from "../constants/constants";
import RecommendedRecipesScreen from "../screens/Home/RecommendedRecipes";
import FavoriteRecipesScreen from "../screens/Home/FavoriteRecipes";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function HomeTopTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.brand.primary,
        tabBarInactiveTintColor: color.text.primary,
        tabBarLabelStyle: { fontSize: font.title.md, fontWeight: 'bold' },
        tabBarIndicatorStyle: { backgroundColor: color.brand.primary },
        tabBarStyle: { marginTop: spacing.s16 },
      }}>
      <Tab.Screen name="추천 레시피" component={RecommendedRecipesScreen} />
      <Tab.Screen name="찜한 레시피" component={FavoriteRecipesScreen} />
    </Tab.Navigator>
  );
}
