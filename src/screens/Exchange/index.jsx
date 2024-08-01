import { FlatList, View } from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import { CustomSearchInput } from "../../components/CustomSearchInput";
import { CustomRowCard } from "../../components/CustomRowCard";
import { CustomAddButton } from "../../components/CustomAddButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { handleDateFormat } from "../../services/handleDateFormat";

export default function ExchangeScreen({ navigation }) {
  const [exchangeList, setExchangeList] = useState([]);
  const [lastExchangeId, setLastExchangeId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  const fetchExchangeList = async () => {
    if (isLoading || isLastPage) return;
    setIsLoading(true);

    try {
      const params = lastExchangeId ? { lastExchangeId } : {};
      const res = await axios.get("http://localhost:8080/api/v1/exchanges", {
        params,
      });
      setExchangeList([...exchangeList, ...res.data.content]);
      if (res.data.content.length) {
        setLastExchangeId(
          res.data.content[res.data.content.length - 1].exchangeId,
        );
      }
      setIsLastPage(res.data.last);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeList();
  }, []);

  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"식재료 교환 게시판"} />
      <CustomSearchInput placeholder={"찾으시는 재료가 있나요?"} />
      <FlatList
        data={exchangeList}
        keyExtractor={(item) => item.exchangeId.toString()}
        renderItem={({ item }) => (
          <CustomRowCard
            id={item.exchangeId}
            uri={item.uri}
            title={item.title}
            location={item.region + " " + item.childRegion}
            date={handleDateFormat(item.createDate)}
            status={item.status}
            onPress={() =>
              navigation.navigate("ExchangeDetail", { id: item.exchangeId })
            }
          />
        )}
        onEndReached={fetchExchangeList}
        onEndReachedThreshold={0.1}
      />
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
