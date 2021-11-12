import { FONT } from "../Styles";
import React from "react";
import { View, Text, Image, StyleSheet} from "react-native";

export const ProfileBlock = (props) => {
    return (
      <View>
        <View style={styles.profileblock}>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.text}>{props.title}</Text>
        </View>
        <View>
          <Image source={{uri: "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"}}></Image>
        </View>
        
      </View>
    )
}

const styles = StyleSheet.create({
  profileblock: {
    textAlign: "center",
    backgroundColor: "#ff9f7f",
    borderRadius: 100,
    color: "#fff",
    padding: 5,
    fontFamily: FONT,
    fontSize: 50,
  },
  text: {
    color: "#ffffff",
    alignSelf:"center",
    fontFamily:FONT,
    fontSize:48,
    margin: 0,
  },
});