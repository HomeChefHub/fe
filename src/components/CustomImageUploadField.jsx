import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";
import { border, color, font, spacing } from "../constants/constants"; // SVG 파일이 저장된 경로

export default function CustomImageUploadField({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <SvgXml xml={svg.camera} />
      <Text style={styles.text}>사진을 업로드 해주세요.</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    borderWidth: 1,
    borderColor: color.border.primary,
    borderRadius: border.radius.md,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.s24,
  },
  text: {
    fontSize: font.body.md,
    color: color.text.secondary,
    marginTop: spacing.s16,
  },
});
