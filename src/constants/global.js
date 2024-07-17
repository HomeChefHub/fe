import { StyleSheet } from "react-native";
import {color, spacing} from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: color.bg.primary,
    padding:spacing.s16,
    flex:1,
  },
});