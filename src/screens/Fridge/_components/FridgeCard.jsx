import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import DropShadow from "react-native-drop-shadow";
import {
  border,
  color,
  font,
  shadow,
  spacing,
} from "../../../constants/constants";

const RecipeCard = ({ uri, title, date }) => {
  return (
    <DropShadow style={shadow}>
      <View style={styles.container}>
        <Image source={uri} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{date}</Text>
        </View>
      </View>
    </DropShadow>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: border.radius.md,
    backgroundColor: color.bg.primary,
    marginBottom: spacing.s16,
  },
  image: {
    width: 130,
    height: "100%",
    borderTopLeftRadius: border.radius.md,
    borderBottomLeftRadius: border.radius.md,
  },
  textContainer: {
    padding: spacing.s16,
  },
  title: {
    fontSize: font.title.md,
    fontWeight: "bold",
    color: color.text.primary,
  },
  description: {
    fontSize: font.body.md,
    color: color.text.secondary,
    marginTop: spacing.s4,
  },
});

export default RecipeCard;
