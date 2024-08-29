import React, { useState, useCallback } from "react";
import { FlatList, View, Text } from "react-native";
import axios from "axios";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import { CustomSearchInput } from "../../components/CustomSearchInput";
import { CustomAddButton } from "../../components/CustomAddButton";
import { FridgeCard } from "./_components/FridgeCard";

export default function FridgeScreen() {
  const api_url = process.env.API_URL;
  const [fridgeList, setFridgeList] = useState([]);
  const [keyword, setKeyword] = useState(null);
  const [lastIngredientId, setLastIngredientId] = useState(null);
  const [daysUntilExpiration, setDaysUntilExpiration] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const fetchFridgeList = async (reset = false) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const params = {};
      if (keyword) params.keyword = keyword;
      if (lastIngredientId && daysUntilExpiration && !reset) {
        params.lastIngredientId = lastIngredientId;
        params.daysUntilExpiration = daysUntilExpiration;
      }

      const res = await axios.get(`${api_url}/ingredients`, { params });
      const newFridgeList = res.data.content;

      if (reset) {
        setFridgeList(newFridgeList);
      } else {
        setFridgeList((prevList) => [...prevList, ...newFridgeList]);
      }

      if (newFridgeList.length > 0) {
        setLastIngredientId(newFridgeList[newFridgeList.length - 1].id);
        setDaysUntilExpiration(
          newFridgeList[newFridgeList.length - 1].daysUntilExpiration,
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setLastIngredientId(null);
      setDaysUntilExpiration(null);
      fetchFridgeList(true);
    }, [keyword]),
  );

  const handleDelete = async (ingredientId) => {
    try {
      await axios.delete(`${api_url}/ingredients/${ingredientId}`);
      fetchFridgeList(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"내 냉장고"} />
      <CustomSearchInput
        placeholder={"찾으시는 재료가 있나요?"}
        onChangeText={(text) => {
          setKeyword(text);
          setLastIngredientId(null);
        }}
      />
      <FlatList
        data={fridgeList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FridgeCard item={item} onDelete={handleDelete} />
        )}
        onEndReached={() => fetchFridgeList(false)}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<Text>내 냉장고 안에 재료가 없습니다.</Text>}
      />
      <View>
        <CustomAddButton
          text={"+ 추가"}
          width={87}
          onPress={() => navigation.navigate("FridgeRegister")}
        />
      </View>
    </View>
  );
}
