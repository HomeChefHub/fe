import { ScrollView, View } from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import { CustomSearchInput } from "../../components/CustomSearchInput";
import { CustomRowCard } from "../../components/CustomRowCard";

import { CustomAddButton } from "../../components/CustomAddButton";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ExchangeScreen({ navigation }) {
  const [exchangeList, setExchangeList] = useState([]);

  const fetchExchangeList = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/exchanges");
      setExchangeList(res.data.content);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExchangeList();
  }, []);

  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"식재료 교환 게시판"} />
      <CustomSearchInput placeholder={"찾으시는 재료가 있나요?"} />
      <ScrollView>
        {exchangeList.map((exchange) => (
          <CustomRowCard
            key={exchange.exchangeId}
            uri={exchange.uri}
            title={exchange.title}
            location={exchange.region + " " + exchange.childRegion}
            date={exchange.createDate}
            status={exchange.status}
          />
        ))}
      </ScrollView>
      <View>
        <CustomAddButton
          text={"+ 추가"}
          width={87}
          onPress={() => navigation.navigate("ExchangeRegister")}
        />
      </View>
    </View>
  );
}
