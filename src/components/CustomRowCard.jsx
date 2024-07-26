import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import DropShadow from "react-native-drop-shadow";
import { border, color, font, shadow, spacing } from "../constants/constants";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";

export const CustomRowCard = ({ uri, title, location, date, status }) => {
  const isReserved = status === "ACTIVE";
  return (
    <DropShadow style={shadow}>
      <View style={styles.container}>
        {uri && <Image source={uri} style={styles.image} />}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.descriptionContainer}>
            {location && <Text style={styles.date}>{location}</Text>}
            <Text style={styles.date}>{date}</Text>
          </View>
          {status && (
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
                    stroke: isReserved
                      ? color.text.inverse
                      : color.text.secondary,
                  },
                ]}
              />
              <Text
                style={[
                  styles.statusText,
                  {
                    color: isReserved
                      ? color.text.inverse
                      : color.text.secondary,
                  },
                ]}
              >
                {isReserved ? "예약 중" : "거래완료"}
              </Text>
            </View>
          )}
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
