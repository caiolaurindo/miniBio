import { View, Text, Image } from "react-native";
export default function Profile() {
    return (
        <View>
            <Image source={ require("../assets/images/foto.jpg") }  style={{ width: 100, height: 100 , borderRadius: 50}} />
            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Caio</Text>
        </View>
    );
}
