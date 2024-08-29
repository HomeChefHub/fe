import React from "react";
import { View } from "react-native";
import { CustomGoBackHeader } from "../../components/CustomGoBackHeader";
import { globalStyles } from "../../constants/global";
import { FridgeForm } from "./_components/FridgeForm";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";

export default function FridgeEditScreen({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();

  const handleSubmit = async (data) => {
    try {
      await axios.patch(`${process.env.API_URL}/ingredients/${item.id}`, data);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <CustomGoBackHeader text={"게시물 수정"} />
      <FridgeForm
        title={item.name}
        startDate={format(item.startDate, "yyyy-MM-dd'T'HH:mm:ss")}
        endDate={format(item.endDate, "yyyy-MM-dd'T'HH:mm:ss")}
        onSubmit={handleSubmit}
        isEdit={true}
      />
    </View>
  );
}
