import { View } from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";

export default function MyPageScreen() {
  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"마이페이지"} />
    </View>
  );
}
