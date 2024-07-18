import { FlatList, View, StyleSheet } from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import { CustomSearchInput } from "../../components/CustomSearchInput";
import FridgeCard from "./_components/FridgeCard";

import fridgeSample from "../../assets/fridge.png";
import { CustomButton } from "../../components/CustomButton";
import { spacing } from "../../constants/constants";

const fridges = [
  {
    id: "1",
    uri: fridgeSample,
    title: "달걀 1",
    date: "2024.07.03 ~ 2024.07.25",
  },
  {
    id: "2",
    uri: fridgeSample,
    title: "달걀 2",
    date: "2024.07.03 ~ 2024.07.25.",
  },
  {
    id: "3",
    uri: fridgeSample,
    title: "달걀 3",
    date: "2024.07.03 ~ 2024.07.25.",
  },
  {
    id: "4",
    uri: fridgeSample,
    title: "달걀 4",
    date: "2024.07.03 ~ 2024.07.25.",
  },
  {
    id: "5",
    uri: fridgeSample,
    title: "달걀 5",
    date: "2024.07.03 ~ 2024.07.25.",
  },
];

export default function FridgeScreen() {
  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"내 냉장고"} />
      <CustomSearchInput placeholder={"찾으시는 재료가 있나요?"} />
      <FlatList
        data={fridges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FridgeCard uri={item.uri} title={item.title} date={item.date} />
        )}
      />
      <View style={styles.button}>
        <CustomButton text={"+ 추가"} width={87} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: spacing.s16,
    bottom: spacing.s16,
  },
});
