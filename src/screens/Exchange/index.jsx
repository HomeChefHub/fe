import { FlatList, View } from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import { CustomSearchInput } from "../../components/CustomSearchInput";
import { CustomRowCard } from "../../components/CustomRowCard";

import exchangeSample from "../../assets/exchange.png";

const exchanges = [
  {
    id: "1",
    uri: exchangeSample,
    title: "두바이 초콜릿 드실 분~",
    location: "송파구 송파1동",
    date: " 2024.07.11",
    status: "예약 중",
  },
  {
    id: "2",
    uri: exchangeSample,
    title: "두바이 초콜릿 드실 분~",
    location: "송파구 송파1동",
    date: " 2024.07.11",
    status: "거래 완료",
  },
  {
    id: "3",
    uri: exchangeSample,
    title: "두바이 초콜릿 드실 분~",
    location: "송파구 송파1동",
    date: " 2024.07.11",
  },
  {
    id: "4",
    uri: exchangeSample,
    title: "두바이 초콜릿 드실 분~",
    location: "송파구 송파1동",
    date: " 2024.07.11",
  },
  {
    id: "5",
    uri: exchangeSample,
    title: "두바이 초콜릿 드실 분~",
    location: "송파구 송파1동",
    date: " 2024.07.11",
  },
];

export default function ExchangeScreen() {
  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"식재료 교환 게시판"} />
      <CustomSearchInput placeholder={"찾으시는 재료가 있나요?"} />
      <FlatList
        data={exchanges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CustomRowCard
            uri={item.uri}
            title={item.title}
            location={item.location}
            date={item.date}
            status={item.status}
            heartCount={item.heartCount}
          />
        )}
      />
    </View>
  );
}
