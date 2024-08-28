import React, { useState, useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import { CustomSearchInput } from "../../components/CustomSearchInput";
import { CustomRowCard } from "../../components/CustomRowCard";
import { CustomAddButton } from "../../components/CustomAddButton";
import { format } from "date-fns";

export default function ExchangeScreen({ navigation }) {
  const api_url = process.env.API_URL;
  const [exchangeList, setExchangeList] = useState([]);
  const [keyword, setKeyword] = useState(null);
  const [lastExchangeId, setLastExchangeId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchExchangeList = async (reset = false) => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const params = { keyword };
      if (lastExchangeId && !reset) {
        params.lastExchangeId = lastExchangeId;
      }

      const res = await axios.get(`${api_url}/exchanges`, { params });

      const newExchangeList = res.data.content;

      if (reset) {
        setExchangeList(newExchangeList);
      } else {
        setExchangeList((prevList) => [...prevList, ...newExchangeList]);
      }
      if (newExchangeList.length > 0) {
        setLastExchangeId(
          newExchangeList[newExchangeList.length - 1].exchangeId,
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setLastExchangeId(null);
      fetchExchangeList(true);
    }, [keyword]),
  );

  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"식재료 교환 게시판"} />
      <CustomSearchInput
        placeholder={"찾으시는 재료가 있나요?"}
        onChangeText={(text) => {
          setKeyword(text);
        }}
      />
      <FlatList
        data={exchangeList}
        renderItem={({ item }) => (
          <CustomRowCard
            id={item.exchangeId}
            title={item.title}
            location={`${item.region} ${item.childRegion}`}
            date={format(item.createDate, "yyyy-MM-dd'T'HH:mm")}
            isTraded={item.status === "TRADED"}
            imageUrl={item.thumbnailUrl}
            onPress={() =>
              navigation.navigate("ExchangeDetail", {
                exchangeId: item.exchangeId,
              })
            }
          />
        )}
        keyExtractor={(item) => item.exchangeId}
        onEndReached={() => fetchExchangeList(false)} // false를 명시적으로 전달
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<Text>교환 게시물이 없습니다.</Text>}
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
