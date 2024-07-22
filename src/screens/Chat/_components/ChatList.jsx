import { Text, View, StyleSheet, Image } from "react-native";
import { border, color, font, spacing } from "../../../constants/constants";
import { SvgXml } from "react-native-svg";
import { svg } from "../../../assets/svg";

export default function ChatList({ uri, nickname, message }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {uri ? (
          <Image source={uri} style={styles.image} />
        ) : (
          <SvgXml
            xml={svg.user}
            fill={color.bg.primary}
            width="36"
            height="36"
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nickname}>{nickname}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.s12,
    paddingHorizontal: spacing.s16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: border.radius.lg,
    backgroundColor: color.border.secondary,
    marginRight: spacing.s16,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    height: 50,
  },
  textContainer: {
    flex: 1,
  },
  nickname: {
    fontSize: font.title.md,
    fontWeight: "bold",
    color: color.text.primary,
  },
  message: {
    fontSize: font.body.md,
    color: color.text.primary,
    marginTop: spacing.s4,
  },
});
