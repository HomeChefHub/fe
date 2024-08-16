import { FlatList, View } from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import { CustomSearchInput } from "../../components/CustomSearchInput";
import { CustomRowCard } from "../../components/CustomRowCard";
import { CustomAddButton } from "../../components/CustomAddButton";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { handleDateFormat } from "../../services/handleDateFormat";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

export default function ExchangeScreen({ navigation }) {
  const [exchangeList, setExchangeList] = useState([]);
  const [lastExchangeId, setLastExchangeId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const isFocused = useIsFocused();

  const fetchExchangeList = async () => {
    if (isLoading || isLastPage) return;
    setIsLoading(true);

    try {
      const params = lastExchangeId ? { lastExchangeId } : {};
      const res = await axios.get(`${process.env.API_URL}/exchanges`, {
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
  }, [isFocused]);

  useFocusEffect(
    useCallback(() => {
      fetchExchangeList();
    }, []),
  );

  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"식재료 교환 게시판"} />
      <CustomSearchInput placeholder={"찾으시는 재료가 있나요?"} />
      <FlatList
        data={exchangeList}
        keyExtractor={(item) => item.exchangeId}
        renderItem={({ item }) => (
          <CustomRowCard
            id={item.exchangeId}
            uri={item.uri}
            title={item.title}
            location={item.region + " " + item.childRegion}
            date={handleDateFormat(item.createDate)}
            isTraded={item.status === "TRADED"}
            onPress={() =>
              navigation.navigate("ExchangeDetail", {
                exchangeId: item.exchangeId,
              })
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
