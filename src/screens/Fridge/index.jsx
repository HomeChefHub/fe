import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import { CustomSearchInput } from "../../components/CustomSearchInput";
import { CustomAddButton } from "../../components/CustomAddButton";
import axios from "axios";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { color, font, spacing } from "../../constants/constants";
import { handleDateFormat } from "../../services/handleDateFormat";
import { SvgXml } from "react-native-svg";
import { svg } from "../../assets/svg";
import { CustomRowCard } from "../../components/CustomRowCard";

export default function FridgeScreen() {
  const [fridgeList, setFridgeList] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const id = 1;
  const navigation = useNavigation();

  const fetchFridgeList = async () => {
    try {
      const res = await axios.get(`${process.env.API_URL}/members/${id}`);
      setFridgeList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFridgeList();
    }, []),
  );

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`${process.env.API_URL}/refrigerator/${itemId}`, {
        data: {
          requestMemberId: id,
        },
      });
      fetchFridgeList();
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.rowCardContainer}>
          <CustomRowCard
            uri={item.uri}
            title={item.name}
            date={`${handleDateFormat(item.startDate).substring(0, 10)} ~ ${handleDateFormat(item.endDate).substring(0, 10)}`}
          />
          <TouchableOpacity
            style={styles.threeDotsContainer}
            onPress={() =>
              setSelectedItemId(selectedItemId === item.id ? null : item.id)
            }
          >
            <SvgXml xml={svg.threeDots} style={styles.threeDots} />
          </TouchableOpacity>
        </View>
        {selectedItemId === item.id && (
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() =>
                navigation.navigate("FridgeEdit", {
                  item: item,
                  memberId: id,
                })
              }
            >
              <Text style={styles.optionText}>수정</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.optionText}>삭제</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"내 냉장고"} />
      <CustomSearchInput placeholder={"찾으시는 재료가 있나요?"} />
      <FlatList
        data={fridgeList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <View>
        <CustomAddButton
          text={"+ 추가"}
          width={87}
          onPress={() => navigation.navigate("FridgeRegister")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    position: "relative",
    marginBottom: 10,
  },
  rowCardContainer: {
    position: "relative",
  },
  threeDotsContainer: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 10,
    top: 20,
  },
  threeDots: {
    width: "100%",
    height: "100%",
  },
  optionContainer: {
    position: "absolute",
    right: 10,
    top: 40,
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.border.primary,
  },
  optionButton: {
    padding: spacing.s12,
  },
  optionText: {
    fontSize: font.body.lg,
  },
});
