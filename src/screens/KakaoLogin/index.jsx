import React from "react";
import { WebView } from "react-native-webview";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const KAKAO_REST_API_KEY = process.env.KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${encodeURIComponent(
  KAKAO_REDIRECT_URI,
)}&response_type=code`;

export default function KakaoLoginScreen() {
  const navigation = useNavigation();

  const getAccessToken = async (authCode) => {
    try {
      const data = `grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${encodeURIComponent(
        KAKAO_REDIRECT_URI,
      )}&code=${authCode}`;

      const tokenResponse = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      );

      const accessToken = tokenResponse.data.access_token;
      console.log("Access Token:", accessToken);

      const userResponse = await axios.get(
        "https://kapi.kakao.com/v2/user/me",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      ); // 추후에 백으로 보낼 때 사용

      navigation.navigate("MyPage");
    } catch (err) {
      console.error(err);
    }
  };

  const handleNavigationChange = (state) => {
    const { url } = state;

    const codeMatch =
      url.startsWith(process.env.KAKAO_REDIRECT_URI) &&
      url.match(/[?&]code=([^&]+)/);

    if (codeMatch) {
      const authCode = codeMatch[1];
      console.log("Authorization Code:", authCode);
      getAccessToken(authCode);
    }
  };

  return (
    <WebView
      source={{ uri: KAKAO_AUTH_URL }}
      onNavigationStateChange={handleNavigationChange}
    />
  );
}
