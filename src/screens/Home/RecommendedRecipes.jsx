import { ScrollView, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../constants/global";
import { color, font, spacing } from "../../constants/constants";
import { RecipeCard } from "./_components/RecipeCard";

import sampleRecipe from "../../assets/recipe.png";

export default function RecommendedRecipesScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>🍕 OO님, 안녕하세요!</Text>
        <Text style={styles.text}>냉장고 속 식재료로 만들 수 있는</Text>
        <Text style={styles.text}>맛있는 레시피를 추천해드릴게요!</Text>
      </View>
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
  textContainer: {
    marginBottom: spacing.s16,
  },
  text: {
    color: color.text.primary,
    fontSize: font.title.lg,
    fontWeight: "bold",
  },
});
