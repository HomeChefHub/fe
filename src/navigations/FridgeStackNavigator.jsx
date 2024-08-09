import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FridgeScreen from "../screens/Fridge";
import FridgeEditScreen from "../screens/Fridge/FridgeEdit";
import FridgeRegisterScreen from "../screens/Fridge/FrdigeRegister";

const FridgeStack = createNativeStackNavigator();

export default function FridgeStackNavigator() {
  return (
    <FridgeStack.Navigator screenOptions={{ headerShown: false }}>
      <FridgeStack.Screen name="Fridge" component={FridgeScreen} />
      <FridgeStack.Screen
        name="FridgeRegister"
        component={FridgeRegisterScreen}
      />
      <FridgeStack.Screen name="FridgeEdit" component={FridgeEditScreen} />
    </FridgeStack.Navigator>
  );
}
