import { StyleSheet, Dimensions } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

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
      height: SCREEN_HEIGHT*0.925-48,//Dimensions.get("window").height - 82,
      //width: SCREEN_WIDTH,//Dimensions.get("window").width,
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
    card: {
      //height: SCREEN_HEIGHT-78,
      //position:"absolute",
      //alignSelf:"center",
    },
    nomargins: {
      margin: 0,
    },
    navbar: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT*0.075,
      backgroundColor: "#b1b1b1",
      flexDirection: "row",
      justifyContent: "center",
      top: SCREEN_HEIGHT*0.925,
      zIndex: 10,
      position:"absolute",
    },
});