import { ScrollView, View } from "react-native";
import { globalStyles } from "../../constants/global";
import { CustomHeader } from "../../components/CustomHeader";
import ChatList from "./_components/ChatList";

import sampleProfile from "../../assets/profile.png";

export default function ChatScreen() {
  return (
    <View style={globalStyles.container}>
      <CustomHeader title={"채팅"} />
      <ScrollView>
        <ChatList
          uri={sampleProfile}
          nickname={"닉네임1"}
          message={
            "메세지1 메세지1 메세지1 메세지1 메세지1 메세지1 메세지1 메세지1"
          }
        />
        <ChatList nickname={"닉네임2"} message={"메세지2"} />
        <ChatList
          uri={sampleProfile}
          nickname={"닉네임3"}
          message={"메세지3"}
        />
        <ChatList
          nickname={"닉네임4"}
          message={"메세지4 메세지4 메세지4 메세지4 메세지4"}
        />
        <ChatList nickname={"닉네임5"} message={"메세지5"} />
        <ChatList nickname={"닉네임6"} message={"메세지6"} />
        <ChatList nickname={"닉네임7"} message={"메세지7"} />
        <ChatList nickname={"닉네임8"} message={"메세지8"} />
        <ChatList nickname={"닉네임9"} message={"메세지9"} />
      </ScrollView>
    </View>
  );
}
