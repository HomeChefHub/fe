import { ScrollView, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../constants/global";
import { color, font, spacing } from "../../constants/constants";
import { RecipeCard } from "./_components/RecipeCard";

import axios from "axios";
import { useState, useEffect } from "react";

export default function RecommendedRecipesScreen() {
  const [recipeList, setRecipeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get(`${process.env.API_URL}/recipes`, {
        params: { page: 0, size: 10 },
      });
      setRecipeList(res.data.content);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>🍕 OO님, 안녕하세요!</Text>
        <Text style={styles.text}>냉장고 속 식재료로 만들 수 있는</Text>
        <Text style={styles.text}>맛있는 레시피를 추천해드릴게요!</Text>
      </View>
      <View>
        {recipeList.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            img={recipe.imgSrc}
            name={recipe.name}
          />
        ))}
      </View>
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
