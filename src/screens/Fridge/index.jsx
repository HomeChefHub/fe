import { FlatList, View } from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import { CustomSearchInput } from "../../components/CustomSearchInput";
import { CustomAddButton } from "../../components/CustomAddButton";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FridgeCard } from "./_components/FridgeCard";

export default function FridgeScreen() {
  const api_url = process.env.API_URL;
  const [fridgeList, setFridgeList] = useState([]);
  const navigation = useNavigation();

  const fetchFridgeList = async () => {
    try {
      const res = await axios.get(`${api_url}/ingredients`);
      setFridgeList(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFridgeList();
    }, []),
  );

  const handleDelete = async (ingredientId) => {
    try {
      await axios.delete(`${api_url}/ingredients/${ingredientId}`);
      fetchFridgeList();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"내 냉장고"} />
      <CustomSearchInput placeholder={"찾으시는 재료가 있나요?"} />
      <FlatList
        data={fridgeList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FridgeCard item={item} onDelete={handleDelete} />
        )}
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
