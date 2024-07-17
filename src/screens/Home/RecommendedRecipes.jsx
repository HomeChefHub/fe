import {StyleSheet, Text, View} from "react-native";
import {globalStyles} from "../../constants/global";
import {Fragment} from "react";
import {color, font} from "../../constants/constants";

export default function RecommendedRecipesScreen() {
  return (
    <View style={globalStyles.container}>
      <Fragment>
        <Text style={styles.text}>🍕 OO님, 안녕하세요!</Text>
        <Text style={styles.text}>냉장고 속 식재료로 만들 수 있는</Text>
        <Text style={styles.text}>맛있는 레시피를 추천해드릴게요!</Text>
      </Fragment>
    </View>
  );
}


const styles = StyleSheet.create({
  text: {
    color: color.text.primary,
    fontSize: font.title.lg,
    fontWeight: 'bold',
  }
})