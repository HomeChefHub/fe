import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyles } from "../../constants/global";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CustomGoBackHeader } from "../../components/CustomGoBackHeader";
import { border, color, font, spacing } from "../../constants/constants";
import { SvgXml } from "react-native-svg";
import { svg } from "../../assets/svg";

export default function RecipeDetailScreen({ route }) {
  const api_url = process.env.API_URL;
  const { recipeId } = route.params;
  const [recipeList, setRecipeList] = useState({});
  const [isLike, setIsLike] = useState(false);

  const fetchRecipeDetail = async () => {
    try {
      const res = await axios.get(`${api_url}/recipes/${recipeId}`);
      setRecipeList(res.data);
      await checkIsLike(); // Pass recipeId to checkIsLike
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLikes = async () => {
    try {
      const res = await axios.get(`${api_url}/recipes/likes`);
      return res.data.content;
    } catch (err) {
      console.log(err);
    }
  };

  const checkIsLike = async () => {
    const likes = await fetchLikes();
    const likeExists = likes.some((recipe) => recipe.id === recipeId);
    setIsLike(likeExists);
  };

  const handleLikes = async () => {
    try {
      await axios.post(`${api_url}/recipes/likes`, { recipeId });
      setIsLike(!isLike);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecipeDetail();
  }, []);

  const {
    name = "",
    thumbnail = "",
    tip = "",
    ingredients = "",
    manuals = [],
  } = recipeList;

  return (
    <ScrollView style={globalStyles.container}>
      <CustomGoBackHeader text={name} />
      <View style={styles.imgContainer}>
        <Image source={{ uri: thumbnail }} style={styles.image} />
        <TouchableOpacity
          style={styles.heartIconContainer}
          onPress={handleLikes}
        >
          <SvgXml xml={isLike ? svg.heartFilled : svg.heart} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.title}>재료</Text>
        <Text style={styles.text}>{ingredients}</Text>
      </View>

      <View style={styles.divider}></View>

      <View style={{ marginBottom: 24 }}>
        <Text style={styles.title}>조리법</Text>
        {manuals.map((manual, index) => (
          <Text key={index} style={styles.text}>
            {manual.content}
          </Text>
        ))}
      </View>

      <View style={styles.tipContainer}>
        <View style={styles.tipTitleContainer}>
          <SvgXml xml={svg.tip} />
          <Text style={styles.tipTitle}>Tip</Text>
        </View>
        <View style={styles.tipTextContainer}>
          {tip.split(". ").map((sentence, index) => (
            <Text key={index} style={styles.tipText}>
              {sentence}
            </Text>
          ))}
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
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: border.radius.md,
  },
  heartIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  title: {
    fontSize: font.title.md,
    fontWeight: "bold",
    marginBottom: spacing.s8,
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
    backgroundColor: "#EDF2FF",
    padding: spacing.s16,
    borderColor: "#BAC8FF",
    borderWidth: 1,
    borderRadius: border.radius.md,
    marginBottom: spacing.s28,
  },
  tipTitleContainer: {
    display: "flex",
    flexDirection: "row",
  },
  tipTitle: {
    color: "#4263EB",
    fontSize: font.title.md,
    fontWeight: "bold",
    marginLeft: spacing.s8,
    marginBottom: spacing.s4,
  },
  tipTextContainer: {
    flex: 1,
    marginLeft: spacing.s8,
    marginBottom: spacing.s8,
  },
  tipText: {
    fontSize: font.body.md,
    marginTop: spacing.s8,
  },
});
