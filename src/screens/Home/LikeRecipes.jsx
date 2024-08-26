import React, { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import { globalStyles } from "../../constants/global";
import { RecipeCard } from "./_components/RecipeCard";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

export default function LikeRecipesScreen() {
  const api_url = process.env.API_URL;
  const [likeRecipeList, setLikeRecipeList] = useState([]);
  const [lastLikeRecipeId, setLastLikeRecipeId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLikeRecipes = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const params = lastLikeRecipeId ? { lastLikeRecipeId } : {};
      const res = await axios.get(`${api_url}/recipes/likes`, {
        params,
      });

      const newLikeRecipeList = res.data.content;
      setLikeRecipeList([...likeRecipeList, ...newLikeRecipeList]);

      if (newLikeRecipeList.length > 0) {
        setLastLikeRecipeId(newLikeRecipeList[newLikeRecipeList.length - 1].id);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchLikeRecipes();
    }, []),
  );

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={likeRecipeList}
        renderItem={({ item }) => (
          <RecipeCard
            key={item.id}
            recipeId={item.id}
            img={item.thumbnail}
            name={item.name}
          />
        )}
        keyExtractor={(item) => item.id}
        onEndReached={fetchLikeRecipes}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
