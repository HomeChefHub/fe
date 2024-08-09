import React from "react";
import { View } from "react-native";
import { CustomGoBackHeader } from "../../components/CustomGoBackHeader";
import { globalStyles } from "../../constants/global";
import { ExchangeForm } from "./_components/ExchangeForm"; // Import the new component
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function ExchangeEditScreen({ route }) {
  const { exchangeId, exchangeDetail } = route.params;
  const navigation = useNavigation();

  const handleSubmit = async (data) => {
    try {
      await axios.patch(
        `http://localhost:8080/api/v1/exchanges/${exchangeId}`,
        data,
      );
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const { title, content } = exchangeDetail;

  return (
    <View style={globalStyles.container}>
      <CustomGoBackHeader text={"게시물 수정"} />
      <ExchangeForm
        title={title}
        content={content}
        regionId={16}
        onSubmit={handleSubmit}
        isEdit={true}
      />
    </View>
  );
}
