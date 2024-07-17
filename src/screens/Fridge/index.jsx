import {View} from "react-native";
import {globalStyles} from "../../constants/global";
import {Header} from "../../components/Header";

export default function FridgeScreen() {
  return (
    <View style={globalStyles.container}>
      <Header title={"냉장고"} />
    </View>
  );
}