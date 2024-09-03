import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import CustomTextField from "../../../components/CustomTextField";
import { CustomButton } from "../../../components/CustomButton";
import { color, font, spacing } from "../../../constants/constants";
import CustomImageUploadField from "../../../components/CustomImageUploadField";
import CalendarPicker from "react-native-calendar-picker";
import { format } from "date-fns";

export function FridgeForm({
  isEdit,
  imageUrl = null,
  name = "",
  expirationDate = null,
  onSubmit,
}) {
  const [selectedName, setSelectedName] = useState(name);
  const [selectedExpirationDate, setSelectedExpirationDate] =
    useState(expirationDate);
  const [selectedImage, setSelectedImage] = useState(imageUrl);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", selectedName);
    formData.append(
      "expirationDate",
      format(selectedExpirationDate, "yyyy-MM-dd'T'HH:mm:ss"),
    );

    if (selectedImage) {
      formData.append("image", {
        uri: isEdit ? selectedImage.uri : selectedImage.url,
        name: selectedImage.filename || "image.jpg",
        type: selectedImage.mimeType || "image/jpeg",
      });
    }

    onSubmit(formData);
  };

  return (
    <ScrollView>
      <CustomImageUploadField
        isEdit={isEdit}
        imageUrl={imageUrl}
        onImageSelect={setSelectedImage}
      />
      <CustomTextField
        title={"음식 이름을 입력해 주세요."}
        fieldHeight={40}
        placeHolder={"음식 이름"}
        value={selectedName}
        onChangeText={setSelectedName}
      />
      <View>
        <Text style={styles.dateTitle}>유통기한을 지정해 주세요</Text>
        <CalendarPicker
          todayBackgroundColor={color.brand.primary}
          selectedDayColor={color.brand.secondary}
          selectedDayTextColor={color.text.inverse}
          onDateChange={(date) => setSelectedExpirationDate(date)}
          weekdays={["일", "월", "화", "수", "목", "금", "토"]}
          months={[
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
          ]}
          previousTitle="이전"
          nextTitle="다음"
          selectedStartDate={selectedExpirationDate}
        />
      </View>

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
  dateTitle: {
    fontSize: font.title.md,
    fontWeight: "bold",
    marginBottom: spacing.s12,
  },
});
