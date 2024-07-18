import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";
import { border, color, spacing } from "../constants/constants";

export const CustomSearchInput = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <SvgXml
        style={styles.icon}
        xml={svg.search}
        fill={color.icon.primary}
        width={24}
        height={24}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor={color.text.primary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.s8,
    marginTop: spacing.s16,
    borderRadius: border.radius.md,
    marginBottom: spacing.s24,
  },
  icon: {
    marginLeft: spacing.s8,
    marginRight: spacing.s8,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
  label: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
});
