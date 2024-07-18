import { View } from "react-native";
import { CustomHeader } from "../../components/CustomHeader";
import { globalStyles } from "../../constants/global";
import { CustomSearchInput } from "../../components/CustomSearchInput";
import HomeTopTabBar from "../../navigations/HomeTopTabBar";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"Refooding"} />
      <CustomSearchInput
        placeholder={"요리명 또는 재료로 레시피를 검색해보세요!"}
      />
      <HomeTopTabBar />
    </View>
  );
}
