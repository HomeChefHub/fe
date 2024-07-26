import { ScrollView } from "react-native";
import { globalStyles } from "../../constants/global";
import React from "react";

export default function ExchangeDetailScreen({ route }) {
  const { id } = route.params;

  return <ScrollView style={globalStyles.container}></ScrollView>;
}
