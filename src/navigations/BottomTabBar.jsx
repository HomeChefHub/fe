import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FridgeScreen from "../screens/Fridge";
import ExchangeScreen from "../screens/Exchange";
import HomeScreen from "../screens/Home";
import ChatScreen from "../screens/Chat";
import MyPageScreen from "../screens/MyPage";
import { color } from "../constants/constants";
import { SvgXml } from "react-native-svg";
import { svg } from "../assets/svg";

const Tab = createBottomTabNavigator();

export default function BottomTabBar() {
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={{
        tabBarActiveTintColor: color.icon.focused,
        tabBarInactiveTintColor: color.icon.primary,
        headerShown: false,
      }}>
      <Tab.Screen name="내 냉장고" component={FridgeScreen} options={{
        tabBarLabel: '내 냉장고',
        tabBarIcon: ({ color, size }) => (
          <SvgXml xml={svg.fridge} fill={color} width={size} height={size} />
        )
      }}/>
      <Tab.Screen name="교환" component={ExchangeScreen} options={{
        tabBarLabel: '교환',
        tabBarIcon: ({ color, size }) => (
          <SvgXml xml={svg.exchange} fill={color} width={size} height={size} />
        )
      }}/>
      <Tab.Screen name="홈" component={HomeScreen} options={{
        tabBarLabel: '홈',
        tabBarIcon: ({ color, size }) => (
          <SvgXml xml={svg.home} fill={color} width={size} height={size} />
        )
      }}/>
      <Tab.Screen name="채팅" component={ChatScreen} options={{
        tabBarLabel: '채팅',
        tabBarIcon: ({ color, size }) => (
          <SvgXml xml={svg.chat} fill={color} width={size} height={size} />
        )
      }}/>
      <Tab.Screen name="마이페이지" component={MyPageScreen} options={{
        tabBarLabel: '마이페이지',
        tabBarIcon: ({ color, size }) => (
          <SvgXml xml={svg.user} fill={color} width={size} height={size} />
        )
      }}/>
    </Tab.Navigator>
  );
}