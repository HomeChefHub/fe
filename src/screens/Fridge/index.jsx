import { FlatList, View } from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import { CustomSearchInput } from "../../components/CustomSearchInput";

import { CustomAddButton } from "../../components/CustomAddButton";
import { CustomRowCard } from "../../components/CustomRowCard";
import axios from "axios";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { handleDateFormat } from "../../services/handleDateFormat";

export default function FridgeScreen() {
  const [fridgeList, setFridgeList] = useState([]);
  const id = 1;
  const navigation = useNavigation();

  const fetchFridgeList = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/refrigerator/members/${id}`,
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

  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"내 냉장고"} />
      <CustomSearchInput placeholder={"찾으시는 재료가 있나요?"} />
      <FlatList
        data={fridgeList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CustomRowCard
            uri={item.uri}
            title={item.name}
            date={`${handleDateFormat(item.startDate).substring(0, 10)} ~ ${handleDateFormat(item.endDate).substring(0, 10)}`}
          />
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
