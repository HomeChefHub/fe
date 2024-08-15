import { ScrollView, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../constants/global";
import { color, font, spacing } from "../../constants/constants";
import { RecipeCard } from "./_components/RecipeCard";
import { useCallback, useState } from "react";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

export default function RecommendedRecipesScreen() {
  const [favoriteRecipeList, setFavoriteRecipeList] = useState([]);
  const [count, setCount] = useState(0);
  const memberId = 1;

  const fetchFavoriteRecipes = async () => {
    try {
      const res = await axios.get(
        `${process.env.API_URL}/recipes/members/${memberId}/favorites`,
      );
      setFavoriteRecipeList(res.data.content);
      setCount(res.data.content.length);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFavoriteRecipes();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={styles.countText}>총 {count}개</Text>
      <View>
        {favoriteRecipeList.map((recipe) => (
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
