import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { color, font } from "../constants/constants";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";
import { useNavigation } from "@react-navigation/native";

export const CustomGoBackHeader = ({ text }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <SvgXml xml={svg.back} onPress={navigation.goBack} />
      <Text style={styles.headerText}>{text}</Text>
      <View style={styles.space}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: font.title.md,
    fontWeight: "bold",
    color: color.text.primary,
  },
  space: {
    width: 24,
    height: 24,
  },
});
