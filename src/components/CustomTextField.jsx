import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { border, color, font, spacing } from "../constants/constants";

export default function CustomTextField({
  title,
  fieldHeight,
  placeHolder,
  multiline = false,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={[styles.inputBox, { height: fieldHeight }]}
        placeholder={placeHolder}
        placeholderTextColor={color.text.secondary}
        multiline={multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.s24,
  },
  title: {
    fontSize: font.title.md,
    fontWeight: "bold",
    marginBottom: spacing.s6,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: color.border.primary,
    borderRadius: border.radius.sm,
    paddingVertical: spacing.s10,
    paddingHorizontal: spacing.s14,
    fontSize: font.body.md,
  },
});
