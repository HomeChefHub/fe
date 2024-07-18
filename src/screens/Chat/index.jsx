import { View } from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";

export default function ChatScreen() {
  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"채팅"} />
    </View>
  );
}
