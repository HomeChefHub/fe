import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExchangeScreen from "../screens/Exchange";
import ExchangeRegisterScreen from "../screens/Exchange/ExchangeRegister";
import ExchangeDetailScreen from "../screens/Exchange/ExchangeDetail";

const ExchangeStack = createNativeStackNavigator();

export default function ExchangeStackNavigator() {
  return (
    <ExchangeStack.Navigator screenOptions={{ headerShown: false }}>
      <ExchangeStack.Screen name="Exchange" component={ExchangeScreen} />
      <ExchangeStack.Screen
        name="ExchangeDetail"
        component={ExchangeDetailScreen}
      />
      <ExchangeStack.Screen
        name="ExchangeRegister"
        component={ExchangeRegisterScreen}
      />
    </ExchangeStack.Navigator>
  );
}
