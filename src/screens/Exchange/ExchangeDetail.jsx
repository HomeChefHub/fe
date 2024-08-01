import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { CustomGoBackHeader } from "../../components/CustomGoBackHeader";
import { border, color, font, spacing } from "../../constants/constants";
import axios from "axios";
import { globalStyles } from "../../constants/global";
import CustomProfileImage from "../../components/CustomProfileImage";
import { CustomButton } from "../../components/CustomButton";
import { handleDateFormat } from "../../services/handleDateFormat";

export default function ExchangeDetailScreen({ route }) {
  const { id } = route.params;

  const [exchangeDetail, setExchangeDetail] = useState({});

  const fetchRecipeDetail = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/exchanges/${id}`,
      );
      setExchangeDetail(res.data);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipeDetail();
  }, []);

  const { title, content, region, childRegion, status, createDate } =
    exchangeDetail;

  return (
    <View style={globalStyles.container}>
      <CustomGoBackHeader
        text={status === "ACTIVE" ? "예약 중" : "거래 완료"}
      />
      <Image style={styles.image} />
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <CustomProfileImage />
          <View>
            <Text style={{ fontSize: font.title.md }}>닉네임</Text>
            <Text style={styles.regionText}>{region + " " + childRegion}</Text>
          </View>
        </View>
        <CustomButton text={"채팅하기"} style={{ width: 100 }} />
      </View>
      <View style={styles.divider} />
      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>{title}</Text>
        <Text styles={{ font: font.body.lg }}>{content}</Text>
        <Text style={styles.contentDate}>{handleDateFormat(createDate)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 250,
    borderWidth: 1,
    borderColor: color.border.primary,
    borderRadius: border.radius.md,
    marginBottom: spacing.s16,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileInfo: {
    display: "flex",
    flexDirection: "row",
  },
  regionText: {
    marginTop: spacing.s20,
  },
  divider: {
    height: 1,
    backgroundColor: color.border.primary,
    marginVertical: spacing.s16,
  },
  contentTitle: {
    fontSize: font.title.lg,
    marginBottom: spacing.s36,
  },
  contentDate: {
    marginTop: spacing.s36,
    color: color.text.secondary,
  },
});
