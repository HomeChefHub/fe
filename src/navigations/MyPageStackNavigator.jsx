import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import KakaoLoginScreen from "../screens/KakaoLogin";
import MyPageScreen from "../screens/MyPage";

const MyPageStack = createNativeStackNavigator();

export default function MyPageStackNavigator() {
  return (
    <MyPageStack.Navigator screenOptions={{ headerShown: false }}>
      <MyPageStack.Screen name="MyPage" component={MyPageScreen} />
      <MyPageStack.Screen name="KakaoLogin" component={KakaoLoginScreen} />
    </MyPageStack.Navigator>
  );
}
