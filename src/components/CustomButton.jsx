import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { border, color, font } from "../constants/constants";

export const CustomButton = ({ text, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: color.brand.primary,
    borderRadius: border.radius.sm,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: font.body.lg,
    fontWeight: "bold",
    color: color.text.inverse,
  },
});
