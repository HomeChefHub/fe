import React from "react";
import { View } from "react-native";
import { CustomGoBackHeader } from "../../components/CustomGoBackHeader";
import { globalStyles } from "../../constants/global";
import { ExchangeForm } from "./_components/ExchangeForm"; // Import the new component
import axios from "axios";

export default function ExchangeRegisterScreen({ navigation }) {
  const api_url = process.env.API_URL;

  const handleSubmit = async (formData) => {
    try {
      await axios.post(`${api_url}/exchanges`, formData, {
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
      <CustomGoBackHeader text={"게시물 작성"} />
      <ExchangeForm onSubmit={handleSubmit} />
    </View>
  );
}
