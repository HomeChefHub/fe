import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { CustomHeader } from "../../components/CustomHeader";
import { globalStyles } from "../../constants/global";
import { CustomSearchInput } from "../../components/CustomSearchInput";
import HomeTopTabBar from "../../navigations/HomeTopTabBar";
import axios from "axios";
import { RecipeCard } from "./_components/RecipeCard";

export default function HomeScreen() {
  const api_url = process.env.API_URL;
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchRecipeList, setSearchRecipeList] = useState([]);
  const [lastRecipeId, setLastRecipeId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearchRecipes = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const params = { searchKeyword };
      if (lastRecipeId) {
        params.lastRecipeId = lastRecipeId;
      }
      const res = await axios.get(`${api_url}/recipes`, { params });

      const newRecipeList = res.data.content;
      setSearchRecipeList([...searchRecipeList, ...newRecipeList]);

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
    fetchSearchRecipes();
  }, [searchKeyword]);

  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"Refooding"} />
      <CustomSearchInput
        placeholder={"재료로 레시피를 검색해보세요!"}
        onChangeText={setSearchKeyword}
      />
      {!searchKeyword ? (
        <HomeTopTabBar />
      ) : (
        <FlatList
          data={searchRecipeList}
          renderItem={({ item }) => (
            <RecipeCard
              key={item.id}
              id={item.id}
              img={item.thumbnail}
              name={item.name}
            />
          )}
          keyExtractor={(item) => item.id}
          onEndReached={fetchSearchRecipes}
          onEndReachedThreshold={0.5}
          ListEmptyComponent={<Text>검색한 레시피가 없습니다.</Text>}
        />
      )}
    </View>
  );
}
