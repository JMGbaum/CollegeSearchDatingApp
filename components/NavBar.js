import { Button, View } from "react-native";
import React from "react";
import { styles } from "../Styles";

export const NavBar = (props) => {
    return (
        <View style={styles.navbar}>
          <Button id="likes" title="Likes"></Button>
          <Button id="stack" title="Stack"></Button>
          <Button id="settings" title="Settings"></Button>
        </View>
    )
}