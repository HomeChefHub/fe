import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import CustomTextField from "../../../components/CustomTextField";
import { CustomButton } from "../../../components/CustomButton";
import { color, font, spacing } from "../../../constants/constants";
import CustomImageUploadField from "../../../components/CustomImageUploadField";
import CustomDropDown from "../../../components/CustomDropDown";
import axios from "axios";
import { CheckBox } from "react-native-btr";

export function ExchangeForm({
  title = "",
  content = "",
  onSubmit,
  isEdit = false,
}) {
  const [regions, setRegions] = useState([]);
  const [childRegions, setChildRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedChildRegion, setSelectedChildRegion] = useState("");
  const [selectedTitle, setSelectedTitle] = useState(title);
  const [selectedContent, setSelectedContent] = useState(content);
  const [selectedIsTraded, setSelectedIsTraded] = useState(false);

  const fetchRegion = async () => {
    try {
      const res = await axios.get(`${process.env.API_URL}/exchanges/regions`);
      setRegions(
        res.data.map((region) => ({
          label: region.name,
          value: region.id,
          childRegions: region.childRegions,
        })),
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRegion();
  }, []);

  const handleSubmit = () => {
    onSubmit({
      title: selectedTitle,
      content: selectedContent,
      regionId: selectedChildRegion,
      ...(isEdit && { status: selectedIsTraded && "TRADED" }),
    });
  };

  const handleRegionChange = (selected) => {
    setSelectedRegion(selected);

    const selectedRegion = regions.find((region) => region.value === selected);
    setChildRegions(
      selectedRegion.childRegions.map((city) => ({
        label: city.name,
        value: city.id,
      })),
    );
  };

  const handleChildRegionChange = (selected) => {
    setSelectedChildRegion(selected);
  };

  return (
    <ScrollView>
      <CustomImageUploadField />
      <CustomTextField
        title={"제목"}
        fieldHeight={40}
        placeHolder={"글 제목을 적어주세요."}
        value={selectedTitle}
        onChangeText={setSelectedTitle}
      />
      <CustomTextField
        title={"재료 설명"}
        fieldHeight={150}
        placeHolder={"재료에 대해 구체적으로 설명해주세요."}
        multiline={true}
        value={selectedContent}
        onChangeText={setSelectedContent}
      />
      <View>
        <Text style={styles.regionTitle}>지역</Text>
        <View style={styles.dropDownContainer}>
          <CustomDropDown
            placeholder={"지역 선택"}
            data={regions}
            onChange={handleRegionChange}
            value={selectedRegion}
          />
          <CustomDropDown
            placeholder={"하위지역 선택"}
            data={childRegions}
            onChange={handleChildRegionChange}
            value={selectedChildRegion}
          />
        </View>
      </View>
      {isEdit && (
        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={selectedIsTraded}
            color={color.brand.primary}
            onPress={() => setSelectedIsTraded(!selectedIsTraded)}
          />
          <Text style={styles.checkboxText}>교환 완료</Text>
        </View>
      )}
      <CustomButton
        style={[styles.button, { height: 50 }]}
        text={"완료"}
        onPress={handleSubmit}
      />
    </ScrollView>
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
  checkboxContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    gap: spacing.s12,
  },
  checkboxText: {
    fontSize: font.title.md,
  },
});
