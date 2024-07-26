import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../constants/global";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomGoBackHeader } from "../../components/CustomGoBackHeader";
import { border, color, font, spacing } from "../../constants/constants";
import { SvgXml } from "react-native-svg";
import { svg } from "../../assets/svg";

export default function RecipeDetailScreen({ route }) {
  const { id } = route.params;
  const [recipeList, setRecipeList] = useState({});

  const fetchRecipeDetail = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/v1/recipes/${id}`);
      setRecipeList(res.data);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipeDetail();
  }, []);

  const {
    name = "",
    imgSrc = "",
    tip = "",
    recipeIngredientResponseList = [],
    manualResponseList = [],
  } = recipeList;

  return (
    <ScrollView style={globalStyles.container}>
      <CustomGoBackHeader text={name} />
      <View style={styles.imgContainer}>
        <Image source={{ uri: imgSrc }} style={styles.image} />
      </View>

      <View>
        <Text style={styles.title}>재료</Text>
        <View style={styles.ingredientContainer}>
          {recipeIngredientResponseList.map((ingredient, index) => (
            <View key={index} style={{ width: "50%" }}>
              <Text style={styles.text}>
                {ingredient.name} {ingredient.quantity}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.divider}></View>

      <View style={{ marginBottom: 24 }}>
        <Text style={styles.title}>조리법</Text>
        {manualResponseList.map((manual, index) => (
          <Text key={index} style={styles.text}>
            {manual.content}
          </Text>
        ))}
      </View>

      <View style={styles.tipContainer}>
        <SvgXml xml={svg.tip} style={styles.tipIcon} />
        <View style={styles.tipTextContainer}>
          <Text style={styles.tipTitle}>Tip</Text>
          <Text style={styles.tipText}>{tip}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    height: 220,
    borderColor: color.border.primary,
    borderRadius: border.radius.md,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.s20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: border.radius.md,
  },
  title: {
    fontSize: font.title.md,
    fontWeight: "bold",
    marginBottom: spacing.s8,
  },
  ingredientContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    fontSize: font.body.md,
    color: color.text.secondary,
    marginBottom: spacing.s8,
  },
  divider: {
    height: 1,
    backgroundColor: color.border.primary,
    marginVertical: spacing.s20,
  },
  tipContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#EDF2FF",
    padding: spacing.s16,
    borderColor: "#BAC8FF",
    borderWidth: 1,
    borderRadius: border.radius.md,
    marginBottom: spacing.s28,
  },
  tipTextContainer: {
    flex: 1,
    marginLeft: spacing.s8,
    marginBottom: spacing.s8,
  },
  tipTitle: {
    color: "#4263EB",
    fontSize: font.title.md,
    fontWeight: "bold",
    marginRight: spacing.s8,
    marginBottom: spacing.s8,
  },
  tipText: {
    fontSize: font.body.md,
  },
});
