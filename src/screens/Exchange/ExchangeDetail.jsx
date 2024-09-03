import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { CustomGoBackHeader } from "../../components/CustomGoBackHeader";
import { border, color, font, spacing } from "../../constants/constants";
import axios from "axios";
import { globalStyles } from "../../constants/global";
import CustomProfileImage from "../../components/CustomProfileImage";
import { CustomButton } from "../../components/CustomButton";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

export default function ExchangeDetailScreen({ route }) {
  const api_url = process.env.API_URL;
  const { exchangeId } = route.params;
  const navigation = useNavigation();
  const id = 1;

  const [exchangeDetail, setExchangeDetail] = useState({});
  const [isModal, setIsModal] = useState(false);

  const fetchExchangeDetail = async () => {
    try {
      const res = await axios.get(`${api_url}/exchanges/${exchangeId}`);
      setExchangeDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchExchangeDetail();
    }, []),
  );

  const {
    title,
    content,
    memberId,
    username,
    region,
    childRegion,
    status,
    createDate,
    imageUrls,
  } = exchangeDetail;

  const handleEditButton = () => {
    navigation.navigate("ExchangeEdit", { exchangeId, exchangeDetail });
  };

  const handleDeleteButton = () => {
    setIsModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`${api_url}/exchanges/${exchangeId}`);
      setIsModal(false);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelDelete = () => {
    setIsModal(false);
  };

  return (
    <ScrollView style={globalStyles.container}>
      <CustomGoBackHeader text={status === "ACTIVE" ? "" : "거래 완료"} />
      {imageUrls && imageUrls.length > 0 && (
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={{ uri: imageUrls[0] }} />
        </View>
      )}
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <CustomProfileImage />
          <View>
            <Text style={{ fontSize: font.title.md }}>{username}</Text>
            <Text style={styles.regionText}>{region + " " + childRegion}</Text>
          </View>
        </View>
        <CustomButton text={"채팅하기"} style={{ width: 100 }} />
      </View>
      <View style={styles.divider} />
      <View style={styles.contentContainer}>
        <Text style={styles.contentTitle}>{title}</Text>
        <Text style={styles.contentBody}>{content}</Text>
        {createDate && (
          <Text
            style={styles.contentDate}
          >{`${createDate.substring(0, 10)} ${createDate.substring(11, 16)}`}</Text>
        )}
      </View>
      {id === memberId && (
        <>
          <View style={styles.buttonContainer}>
            <CustomButton
              text={"수정"}
              style={{
                width: 60,
                backgroundColor: color.border.primary,
                marginRight: spacing.s16,
              }}
              onPress={handleEditButton}
            />
            <CustomButton
              text={"삭제"}
              style={{ width: 60, backgroundColor: color.border.primary }}
              onPress={handleDeleteButton}
            />
          </View>

          <Modal
            isVisible={isModal}
            onBackdropPress={handleCancelDelete}
            style={styles.modalContainer}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalMessage}>
                게시물을 삭제하시겠습니까?
              </Text>
              <View style={styles.modalButtons}>
                <CustomButton
                  text={"삭제"}
                  onPress={handleConfirmDelete}
                  style={styles.modalButton}
                />
                <CustomButton
                  text={"취소"}
                  onPress={handleCancelDelete}
                  style={styles.modalButton}
                />
              </View>
            </View>
          </Modal>
        </>
      )}
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
  contentBody: {
    fontSize: font.body.lg,
  },
  contentDate: {
    marginTop: spacing.s36,
    color: color.text.secondary,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: spacing.s16,
  },
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: spacing.s16,
    borderRadius: border.radius.md,
  },
  modalMessage: {
    fontSize: font.body.lg,
    marginBottom: spacing.s16,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    width: 100,
    marginHorizontal: spacing.s8,
  },
});
