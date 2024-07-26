import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  border,
  color,
  font,
  shadow,
  spacing,
} from "../../../constants/constants";
import DropShadow from "react-native-drop-shadow";
import { useNavigation } from "@react-navigation/native";

export const RecipeCard = ({ id, img, name }) => {
  const navigation = useNavigation();

  return (
    <DropShadow style={shadow}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("RecipeDetail", { id })}
      >
        <Image source={{ uri: img }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>
    </DropShadow>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: border.radius.lg,
    overflow: "hidden",
    backgroundColor: color.bg.primary,
    marginBottom: spacing.s24,
  },
  image: {
    width: "100%",
    height: 200,
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
