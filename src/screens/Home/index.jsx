import {View} from "react-native";
import {Header} from "../../components/Header";
import {globalStyles} from "../../constants/global";
import {SearchInput} from "../../components/SearchInput";
import HomeTopTabBar from "../../navigations/HomeTopTabBar";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Header title={'Refooding'} />
      <SearchInput placeholder={'요리명 또는 재료로 레시피를 검색해보세요!'} />
      <HomeTopTabBar />
    </View>
  );
}
