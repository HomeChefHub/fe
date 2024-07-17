import {View} from "react-native";
import {globalStyles} from "../../constants/global";
import {Header} from "../../components/Header";

export default function MyPageScreen() {
  return (
    <View style={globalStyles.container}>
      <Header title={"마이페이지"} />
    </View>
  );
}