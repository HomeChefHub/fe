import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import CustomTextField from "../../../components/CustomTextField";
import { CustomButton } from "../../../components/CustomButton";
import { color, font, spacing } from "../../../constants/constants";
import CustomImageUploadField from "../../../components/CustomImageUploadField";
import CalendarPicker from "react-native-calendar-picker";
import { format } from "date-fns";

export function FridgeForm({
  id = null,
  title = "",
  startDate = null,
  endDate = null,
  onSubmit,
}) {
  const [selectedTitle, setSelectedTitle] = useState(title);
  const [selectedStartDate, setSelectedStartDate] = useState(startDate);
  const [selectedEndDate, setSelectedEndDate] = useState(endDate);

  const handleDateChange = (date, type) => {
    if (type === "START_DATE") {
      setSelectedStartDate(format(date, "yyyy-MM-dd'T'HH:mm:ss"));
      setSelectedEndDate(null);
    } else if (type === "END_DATE") {
      if (selectedStartDate && date >= selectedStartDate) {
        setSelectedEndDate(format(date, "yyyy-MM-dd'T'HH:mm:ss"));
      }
    }
  };

  const handleSubmit = () => {
    onSubmit({
      memberId: id,
      name: selectedTitle,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
    });
  };

  return (
    <ScrollView>
      <CustomImageUploadField />
      <CustomTextField
        title={"음식 이름을 입력해 주세요."}
        fieldHeight={40}
        placeHolder={"음식 이름"}
        value={selectedTitle}
        onChangeText={setSelectedTitle}
      />
      <View>
        <Text style={styles.dateTitle}>유통기한을 지정해 주세요</Text>
        <CalendarPicker
          allowRangeSelection={true}
          todayBackgroundColor={color.brand.primary}
          selectedDayColor={color.brand.secondary}
          selectedDayTextColor={color.text.inverse}
          onDateChange={(date, type) => handleDateChange(date, type)}
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
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
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
