import { StyleSheet } from "react-native";
import { color, spacing } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg.primary,
    padding: spacing.s16,
  },
});
