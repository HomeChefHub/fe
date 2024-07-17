import {View} from "react-native";
import {globalStyles} from "../../constants/global";
import {Header} from "../../components/Header";
import {SearchInput} from "../../components/SearchInput";

export default function ExchangeScreen() {
  return (
    <View style={globalStyles.container}>
      <Header title={"식재료 교환 게시판"} />
      <SearchInput placeholder={"찾으시는 재료가 있나요?"} />
    </View>
  );
}