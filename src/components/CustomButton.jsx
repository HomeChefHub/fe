import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { border, color, font, spacing } from "../constants/constants";

export const CustomButton = ({ text, width, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { width }]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.brand.primary,
    padding: spacing.s12,
    borderRadius: border.radius.full,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: font.body.lg,
    fontWeight: "bold",
    color: color.text.inverse,
  },
});
