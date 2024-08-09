import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";
import { color, font, spacing, border } from "../constants/constants";

export const CustomStatusLabel = () => {
  return (
    <View style={styles.statusContainer}>
      <SvgXml xml={svg.check} style={{ stroke: color.text.secondary }} />
      <Text style={styles.statusText}>거래완료</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusContainer: {
    borderRadius: border.radius.full,
    paddingVertical: spacing.s6,
    paddingHorizontal: spacing.s12,
    marginTop: spacing.s8,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.bg.secondary,
  },
  statusText: {
    fontSize: font.body.sm,
    fontWeight: "bold",
    marginLeft: spacing.s4,
    color: color.text.secondary,
  },
});
