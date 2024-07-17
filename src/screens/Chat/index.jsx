import {View} from "react-native";
import {globalStyles} from "../../constants/global";
import {Header} from "../../components/Header";

export default function ChatScreen() {
  return (
    <View style={globalStyles.container}>
      <Header title={"채팅"} />
    </View>
  );
}