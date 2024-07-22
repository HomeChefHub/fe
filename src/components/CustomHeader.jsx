import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { color, font, spacing } from "../constants/constants";

export const CustomHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    alignItems: "left",
    justifyContent: "center",
    marginTop: spacing.s16,
    marginBottom: spacing.s16,
  },
  headerText: {
    fontSize: font.heading.md,
    fontWeight: "bold",
    color: color.brand.primary,
  },
});
