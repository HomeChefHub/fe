import { Text, View, StyleSheet } from "react-native";
import { color, font, spacing } from "../../../constants/constants";
import CustomProfileImage from "../../../components/CustomProfileImage";

export default function ChatList({ uri, nickname, message }) {
  return (
    <View style={styles.container}>
      <CustomProfileImage uri={uri} />
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
