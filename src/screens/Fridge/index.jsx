import { FlatList, View, StyleSheet } from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import { CustomSearchInput } from "../../components/CustomSearchInput";
import { CustomAddButton } from "../../components/CustomAddButton";
import axios from "axios";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FridgeCard } from "./_components/FridgeCard";

export default function FridgeScreen() {
  const [fridgeList, setFridgeList] = useState([]);
  const id = 1;
  const navigation = useNavigation();

  const fetchFridgeList = async () => {
    try {
      const res = await axios.get(
        `${process.env.API_URL}/refrigerator/members/${id}`,
      );
      setFridgeList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFridgeList();
    }, []),
  );

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`${process.env.API_URL}/refrigerator/${itemId}`, {
        data: {
          memberId: id,
        },
      });
      fetchFridgeList();
    } catch (error) {
      console.log(error);
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
          <FridgeCard memberId={id} item={item} onDelete={handleDelete} />
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

const styles = StyleSheet.create({
  itemContainer: {
    position: "relative",
    marginBottom: 10,
  },
});
