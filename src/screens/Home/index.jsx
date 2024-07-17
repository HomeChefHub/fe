import {View} from "react-native";
import {Header} from "../../components/Header";
import {globalStyles} from "../../constants/global";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Header title={"Refooding"} />
    </View>
  );
}