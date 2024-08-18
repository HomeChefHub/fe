import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import DropShadow from "react-native-drop-shadow";
import { border, color, font, shadow, spacing } from "../constants/constants";
import { CustomStatusLabel } from "./CustomStatusLabel";

export const CustomRowCard = ({
  title,
  location,
  date,
  isTraded,
  imageUrl,
  onPress,
}) => {
  return (
    <DropShadow style={shadow}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image
          source={
            imageUrl ? { uri: imageUrl } : require("../assets/no_image.png")
          }
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <View style={styles.descriptionContainer}>
            {location && <Text style={styles.date}>{location}</Text>}
            <Text style={styles.date}>{date}</Text>
          </View>
          {isTraded && <CustomStatusLabel />}
        </View>
      </TouchableOpacity>
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
    width: 120,
    height: 100,
    borderTopLeftRadius: border.radius.md,
    borderBottomLeftRadius: border.radius.md,
  },
  textContainer: {
    padding: spacing.s16,
    flex: 1,
  },
  title: {
    fontSize: font.title.md,
    fontWeight: "bold",
    color: color.text.primary,
  },
  descriptionContainer: {
    flexDirection: "row",
    marginTop: spacing.s4,
  },
  date: {
    fontSize: font.body.sm,
    color: color.text.secondary,
    marginRight: spacing.s8,
  },
});
