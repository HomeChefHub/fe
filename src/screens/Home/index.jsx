import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { CustomHeader } from "../../components/CustomHeader";
import { globalStyles } from "../../constants/global";
import { CustomSearchInput } from "../../components/CustomSearchInput";
import HomeTopTabBar from "../../navigations/HomeTopTabBar";
import { RecipeCard } from "./_components/RecipeCard";
import axios from "axios";

export default function HomeScreen() {
  const [recipeList, setRecipeList] = useState([]);
  const [searchIngredients, setSearchIngredients] = useState("");
  const [searchRecipeList, setSearchRecipeList] = useState([]);
  const [memberId, setMemberId] = useState(1);

  const fetchRecipes = async () => {
    try {
      const res = await axios.get(`${process.env.API_URL}/recipes/random`, {
        params: { page: 0, size: 5 },
      });
      setRecipeList(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSearchRecipes = async () => {
    try {
      const res = await axios.get(`${process.env.API_URL}/recipes`, {
        params: { ingredientNames: searchIngredients, page: 0, size: 5 },
      });
      setSearchRecipeList(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [memberId]);

  useEffect(() => {
    if (searchIngredients.length > 0) {
      fetchSearchRecipes();
    } else {
      setSearchRecipeList([]);
    }
  }, [searchIngredients]);

  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"Refooding"} />
      <CustomSearchInput
        placeholder={"요리명 또는 재료로 레시피를 검색해보세요!"}
        onChangeText={setSearchIngredients}
      />
      {searchIngredients ? (
        <ScrollView>
          {searchRecipeList.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              img={recipe.imgSrc}
              name={recipe.name}
            />
          ))}
        </ScrollView>
      ) : memberId ? (
        <HomeTopTabBar />
      ) : (
        <ScrollView>
          {recipeList.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              img={recipe.imgSrc}
              name={recipe.name}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}
