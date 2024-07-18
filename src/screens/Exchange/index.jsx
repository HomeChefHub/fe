import { View } from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import { CustomSearchInput } from "../../components/CustomSearchInput";

export default function ExchangeScreen() {
  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"식재료 교환 게시판"} />
      <CustomSearchInput placeholder={"찾으시는 재료가 있나요?"} />
    </View>
  );
}
