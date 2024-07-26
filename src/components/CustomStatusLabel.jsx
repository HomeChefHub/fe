import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";
import { color, font, spacing, border } from "../constants/constants";

export const CustomStatusLabel = ({ status }) => {
  const isReserved = status === "ACTIVE";

  return (
    <View
      style={[
        styles.statusContainer,
        isReserved ? styles.reserved : styles.completed,
      ]}
    >
      <SvgXml
        xml={svg.check}
        style={[
          styles.statusText,
          {
            stroke: isReserved ? color.text.inverse : color.text.secondary,
          },
        ]}
      />
      <Text
        style={[
          styles.statusText,
          {
            color: isReserved ? color.text.inverse : color.text.secondary,
          },
        ]}
      >
        {isReserved ? "예약 중" : "거래 완료"}
      </Text>
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
  },
  reserved: {
    backgroundColor: color.brand.primary,
  },
  completed: {
    backgroundColor: color.bg.secondary,
  },
  statusText: {
    fontSize: font.body.sm,
    fontWeight: "bold",
    marginLeft: spacing.s4,
  },
});
