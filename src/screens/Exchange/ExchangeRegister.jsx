import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { CustomGoBackHeader } from "../../components/CustomGoBackHeader";
import { globalStyles } from "../../constants/global";
import CustomTextField from "../../components/CustomTextField";
import { CustomButton } from "../../components/CustomButton";
import { font, spacing } from "../../constants/constants";
import CustomImageUploadField from "../../components/CustomImageUploadField";
import CustomDropDown from "../../components/CustomDropDown";

export default function ExchangeRegister() {
  return (
    <View style={globalStyles.container}>
      <CustomGoBackHeader text={"게시물 작성"} />
      <ScrollView>
        <CustomImageUploadField />
        <CustomTextField
          title={"제목"}
          fieldHeight={40}
          placeHolder={"글 제목을 적어주세요."}
        />
        <CustomTextField
          title={"재료 설명"}
          fieldHeight={150}
          placeHolder={"재료에 대해 구체적으로 설명해주세요."}
          multiline={true}
        />
        <View>
          <Text style={styles.regionTitle}>지역</Text>
          <View style={styles.dropDownContainer}>
            <CustomDropDown placeholder={"시"} />
            <CustomDropDown placeholder={"구"} />
          </View>
        </View>
        <CustomButton
          style={[styles.button, { height: 50 }]}
          text={"등록하기"}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: spacing.s52,
    paddingVertical: spacing.s16,
  },
  regionTitle: {
    fontSize: font.title.md,
    fontWeight: "bold",
    marginBottom: spacing.s6,
  },
  dropDownContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
