import { StyleSheet } from "react-native";
import { render } from "react-native-web";
// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff2",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "yellow",
//     fontSize: "30",
//   },
// });

const body = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    fontSize: 20,
    padding: 10,
    color: "green",
    textAlign: "center",
  },
});

export default body;
