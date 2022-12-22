import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import khna from "./Styles/styles";

export default function App() {
  return (
    <View style={khna.container}>
      <Text style={khna.body}>Sent Successfully Congratulations !</Text>
      {/* <Image source={{uri: 'https://url_of_image.png'}} />   */}
      {/* <Image
        source={require("./pexels-eberhard-grossgasteiger-1366913.jpg")}
        style={{ width: 90, height: 90 }}
      />
      <Image
        source={require("../firstsssss/assets/icon.png")}
        style={{ width: 90, height: 55 }}
      /> */}

      <View
        style={{
          flexDirection: "row",
          gap: 10,

          borderRadius: 30,
        }}
      >
        <Button style={khna.body} title="Okay" />
        <Button color={"red"} title="Cancel" />
      </View>

      <Image
        source={require("./130189email.gif")}
        style={{ width: 100, height: 100 }}
      />

      <StatusBar style="auto" />
    </View>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
