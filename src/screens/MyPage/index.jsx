import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import CustomProfileImage from "../../components/CustomProfileImage";
import { color, font, spacing } from "../../constants/constants";
import { SvgXml } from "react-native-svg";
import { svg } from "../../assets/svg";
import { CustomButton } from "../../components/CustomButton";

const myPageList = [
  { key: "notice", label: "공지사항", icon: svg.bell },
  { key: "terms", label: "약관 및 정책", icon: svg.chalkBoard },
  { key: "deleteAccount", label: "회원 탈퇴", icon: svg.xCircle },
];

export default function MyPageScreen() {
  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"마이페이지"} />
      <View style={styles.profileContainer}>
        <CustomProfileImage />
        <Text style={styles.nickname}>닉네임</Text>
        <CustomButton text={"프로필 수정"} width={100} />
      </View>
      <View style={styles.listContainer}>
        {myPageList.map((item) => (
          <View key={item.key} style={styles.list}>
            <SvgXml xml={item.icon} style={styles.icon} />
            <Text style={styles.listText}>{item.label}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.logOut}>로그아웃</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: spacing.s6,
    alignItems: "center",
  },
  nickname: {
    flex: 1,
    fontSize: font.title.md,
    fontWeight: "bold",
  },
  listContainer: {
    marginTop: spacing.s28,
  },
  list: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.s10,
  },
  icon: {
    marginRight: spacing.s16,
  },
  listText: {
    fontSize: font.title.md,
    fontWeight: "bold",
  },
  logOut: {
    color: color.border.primary,
    fontSize: font.title.md,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    marginTop: spacing.s52,
  },
});
