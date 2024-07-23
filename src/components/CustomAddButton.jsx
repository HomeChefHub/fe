import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { border, color, font, spacing } from "../constants/constants";

export const CustomAddButton = ({ text, width, onPress }) => {
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
    position: "absolute",
    right: spacing.s16,
    bottom: spacing.s16,
  },
  text: {
    fontSize: font.body.lg,
    fontWeight: "bold",
    color: color.text.inverse,
  },
});
