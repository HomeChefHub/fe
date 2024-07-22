import { Image, View, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";
import { border, color, spacing } from "../constants/constants";

export default function CustomProfileImage({ uri }) {
  return (
    <View style={styles.imageContainer}>
      {uri ? (
        <Image source={uri} style={styles.image} />
      ) : (
        <SvgXml xml={svg.user} fill={color.bg.primary} width="36" height="36" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
});
