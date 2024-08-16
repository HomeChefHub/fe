import React from "react";
import { View } from "react-native";
import { CustomGoBackHeader } from "../../components/CustomGoBackHeader";
import { globalStyles } from "../../constants/global";
import { FridgeForm } from "./_components/FridgeForm";
import axios from "axios";

export default function FridgeRegisterScreen({ navigation }) {
  const handleSubmit = async (data) => {
    try {
      await axios.post(`${process.env.API_URL}/refrigerator`, data);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <CustomGoBackHeader text={"재료 추가"} />
      <FridgeForm id={1} onSubmit={handleSubmit} />
    </View>
  );
}
