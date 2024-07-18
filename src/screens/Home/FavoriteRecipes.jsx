import { ScrollView, StyleSheet, Text } from "react-native";
import { globalStyles } from "../../constants/global";
import { color, font, spacing } from "../../constants/constants";
import { RecipeCard } from "./_components/RecipeCard";

import sampleRecipe from "../../assets/recipe.png";

export default function RecommendedRecipesScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={styles.countText}>총 13개</Text>
      <RecipeCard
        uri={sampleRecipe}
        title="김치볶음밥"
        description="간편하게 즐길 수 있는 김치볶음밥"
      />
      <RecipeCard
        uri={sampleRecipe}
        title="김치볶음밥"
        description="간편하게 즐길 수 있는 김치볶음밥"
      />
      <RecipeCard
        uri={sampleRecipe}
        title="김치볶음밥"
        description="간편하게 즐길 수 있는 김치볶음밥"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  countText: {
    fontWeight: "bold",
    marginBottom: spacing.s16,
  },
  text: {
    color: color.text.primary,
    fontSize: font.title.lg,
    fontWeight: "bold",
  },
});
