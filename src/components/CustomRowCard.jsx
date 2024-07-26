import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import DropShadow from "react-native-drop-shadow";
import { border, color, font, shadow, spacing } from "../constants/constants";
import { CustomStatusLabel } from "./CustomStatusLabel";

export const CustomRowCard = ({
  uri,
  title,
  location,
  date,
  status,
  onPress,
}) => {
  return (
    <DropShadow style={shadow}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {uri && <Image source={{ uri }} style={styles.image} />}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.descriptionContainer}>
            {location && <Text style={styles.date}>{location}</Text>}
            <Text style={styles.date}>{date}</Text>
          </View>
          {status && <CustomStatusLabel status={status} />}
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
    width: 130,
    height: "100%",
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
    fontSize: font.body.md,
    color: color.text.secondary,
    marginRight: spacing.s8,
  },
});
