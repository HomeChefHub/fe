import {View} from "react-native";
import {globalStyles} from "../../constants/global";
import {Header} from "../../components/Header";

export default function ExchangeScreen() {
  return (
    <View style={globalStyles.container}>
      <Header title={"식재료 교환 게시판"} />
    </View>
  );
}