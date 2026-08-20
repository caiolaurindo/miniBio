import { MissingIcon } from "@react-navigation/elements";
import { Text, View } from "react-native";
import Profile from "../components/Profile";
import MiniBio from "../components/MiniBio";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     
     <Profile />
     <MiniBio />
    </View>
  );
}
