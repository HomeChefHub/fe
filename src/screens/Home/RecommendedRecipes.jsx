import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../constants/global";
import { color, font, spacing } from "../../constants/constants";
import { RecipeCard } from "./_components/RecipeCard";
import axios from "axios";

export default function RecommendedRecipesScreen() {
  const api_url = process.env.API_URL;
  const [recipeList, setRecipeList] = useState([]);
  const [lastRecipeId, setLastRecipeId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const params = lastRecipeId ? { lastRecipeId } : {};
      const res = await axios.get(`${api_url}/recipes`, { params });

      const newRecipeList = res.data.content;
      setRecipeList([...recipeList, ...newRecipeList]);

      if (newRecipeList.length > 0) {
        setLastRecipeId(newRecipeList[newRecipeList.length - 1].id);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <RecipeCard
            recipeId={item.id}
            img={item.thumbnail}
            name={item.name}
          />
        )}
        keyExtractor={(item) => item.id}
        onEndReached={fetchRecipes}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <View style={styles.textContainer}>
            <Text style={styles.text}>🍕 OO님, 안녕하세요!</Text>
            <Text style={styles.text}>냉장고 속 식재료로 만들 수 있는</Text>
            <Text style={styles.text}>맛있는 레시피를 추천해드릴게요!</Text>
          </View>
        }
      />
    </View>
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
