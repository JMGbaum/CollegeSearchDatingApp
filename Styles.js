import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profilecard: {
      backgroundImage: "linear-gradient(to top right, #ff472f, #ff775f, #ff876f, #ff775f, #ff472f)",
      border: "3px solid #ff9f7f",
      borderRadius: 100,
      padding: "50px",
    },
    profileblock: {
      textAlign: "center",
      backgroundColor: "#ff9f7f",
      borderRadius: 100,
      color: "#fff",
      padding: "5px",
      fontFamily: "verdana",
      fontSize: "50px",
    },
    center: {
      display: "flex",
      marginLeft: "auto",
      marginRight: "auto",
    },
    piechart: {
      display: "flex",
      margin: "auto",
      paddingTop: "25px",
    },
    infocard: {
      backgroundImage: "linear-gradient(to top right, #717171, #919191, #a1a1a1, #919191, #717171)",
      border: "3px solid #b1b1b1",
      borderRadius: 100,
      padding: "50px",
    },
    infoblock: {
      textAlign: "center",
      backgroundColor: "#b1b1b1",
      borderRadius: 100,
      color: "#fff",
      padding: "5px",
      fontFamily: "verdana",
      fontSize: 50,
    },
    nomargins: {
      margin: "0px",
    },
    navbar: {
      display: "flex",
      flexDirection: "row",
    },
});