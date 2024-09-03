import { CustomRowCard } from "../../../components/CustomRowCard";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { svg } from "../../../assets/svg";
import { border, color, font, spacing } from "../../../constants/constants";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";

export function FridgeCard({ ingredient, onDelete }) {
  const [isOption, setIsOption] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <CustomRowCard
        title={ingredient.name}
        imageUrl={ingredient.thumbnailUrl}
        date={format(ingredient.expirationDate, "yyyy-MM-dd")}
      />
      {ingredient.daysUntilExpiration <= 7 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>
            D - {ingredient.daysUntilExpiration}
          </Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.threeDotsContainer}
        onPress={() => setIsOption(!isOption)}
      >
        <SvgXml xml={svg.threeDots} />
      </TouchableOpacity>
      {isOption && (
        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() =>
              navigation.navigate("FridgeEdit", {
                ingredient,
              })
            }
          >
            <Text style={styles.optionText}>수정</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => onDelete(ingredient.id)}
          >
            <Text style={styles.optionText}>삭제</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    position: "relative",
    marginBottom: 10,
  },
  badgeContainer: {
    position: "absolute",
    top: 6,
    left: 6,
    backgroundColor: color.red,
    paddingHorizontal: spacing.s8,
    paddingVertical: spacing.s4,
    borderRadius: border.radius.full,
  },
  badgeText: {
    color: color.text.inverse,
    fontSize: font.body.md,
    fontWeight: "bold",
  },
  threeDotsContainer: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 10,
    top: 20,
  },
  optionContainer: {
    position: "absolute",
    right: 10,
    top: 40,
    backgroundColor: "white",
    padding: spacing.s12,
    borderRadius: 5,
  },
  optionButton: {
    padding: spacing.s12,
  },
  optionText: {
    fontSize: font.body.lg,
  },
});
