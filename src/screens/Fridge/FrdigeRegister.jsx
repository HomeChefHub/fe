import React from "react";
import { View } from "react-native";
import { CustomGoBackHeader } from "../../components/CustomGoBackHeader";
import { globalStyles } from "../../constants/global";
import { FridgeForm } from "./_components/FridgeForm";
import axios from "axios";

export default function FridgeRegisterScreen({ navigation }) {
  const api_url = process.env.API_URL;

  const handleSubmit = async (params) => {
    try {
      await axios.post(`${api_url}/ingredients`, params, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <CustomGoBackHeader text={"재료 추가"} />
      <FridgeForm onSubmit={handleSubmit} />
    </View>
  );
}
