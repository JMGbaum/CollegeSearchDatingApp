import { Button, View, Dimensions, StyleSheet } from "react-native";
import React from "react";

export const NavBar = (props) => {
    return (
        <View style={styles.navbar}>
          <Button id="likes" title="Likes"></Button>
          <Button id="stack" title="Stack"></Button>
          <Button id="settings" title="Settings"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
  navbar: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*0.1,
    backgroundColor: "#b1b1b1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    top: Dimensions.get("screen").height*0.9,
    zIndex: 10,
    position:"absolute",
  },
});