import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";
import { border, color, font, spacing } from "../constants/constants";
import * as ImagePicker from "expo-image-picker";

export default function CustomImageUploadField({
  isEdit,
  imageUrl,
  onImageSelect,
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.canceled && result.assets.length > 0) {
      const uploadImage = result.assets[0];
      setSelectedImage(uploadImage);
      onImageSelect(uploadImage);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleImageUpload}>
      {imageUrl || selectedImage ? (
        isEdit ? (
          <Image source={{ uri: imageUrl }} style={styles.image} />
        ) : (
          <Image source={{ uri: selectedImage.uri }} style={styles.image} />
        )
      ) : (
        <>
          <SvgXml xml={svg.camera} />
          <Text style={styles.text}>사진을 업로드 해주세요.</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: "100%",
    borderWidth: 1,
    borderColor: color.border.primary,
    borderRadius: border.radius.md,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.s24,
  },
  text: {
    fontSize: font.body.md,
    color: color.text.secondary,
    marginTop: spacing.s16,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: border.radius.md,
    resizeMode: "cover",
  },
});
