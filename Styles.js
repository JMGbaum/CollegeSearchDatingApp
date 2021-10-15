import { StyleSheet, Dimensions } from "react-native";

export const FONT = "Verdana";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profilecard: {
      borderWidth: 3,
      borderStyle: "solid",
      borderColor: "#ff9f7f",
      borderRadius: 100,
      padding: 50,
      height: Dimensions.get("window").height - 82,
      width: Dimensions.get("window").width,
    },
    profileblock: {
      textAlign: "center",
      backgroundColor: "#ff9f7f",
      borderRadius: 100,
      color: "#fff",
      padding: 5,
      fontFamily: FONT,
      fontSize: 50,
    },
    center: {
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",
    },
    piechart: {
      display: "flex",
      margin: "auto",
      paddingTop: 25,
    },
    infocard: {
      borderWidth: 3,
      borderStyle: "solid",
      borderColor: "#b1b1b1",
      borderRadius: 100,
      padding: 50,
    },
    infoblock: {
      textAlign: "center",
      backgroundColor: "#b1b1b1",
      borderRadius: 100,
      color: "#fff",
      padding: 5,
      fontFamily: FONT,
      fontSize: 50,
    },
    nomargins: {
      margin: 0,
    },
    navbar: {
      width: Dimensions.get("window").width,
      height: "25%",
      backgroundColor: "#b1b1b1",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      top:"175%",
      zIndex: 10,
    },
});