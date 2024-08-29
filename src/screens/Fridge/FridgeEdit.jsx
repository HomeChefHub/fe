import React from "react";
import { View } from "react-native";
import { CustomGoBackHeader } from "../../components/CustomGoBackHeader";
import { globalStyles } from "../../constants/global";
import { FridgeForm } from "./_components/FridgeForm";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";

export default function FridgeEditScreen({ route }) {
  const { ingredient } = route.params;
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
        name={ingredient.name}
        imageUrl={ingredient.thumbnailUrl}
        expirationDate={format(
          ingredient.expirationDate,
          "yyyy-MM-dd'T'HH:mm:ss",
        )}
        onSubmit={handleSubmit}
        isEdit={true}
      />
    </View>
  );
}
