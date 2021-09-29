import { styles } from "../Styles";
import React from "react";
import { View, Text, Image } from "react-native";

export const ProfileBlock = (props) => {
    return (
      <View>
        <View style={styles.profileblock}>
          <Text style={{color: "#ffffff", ...styles.nomargins}}>{props.title}</Text>
        </View>
        <View>
          <Image source={{uri: "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"}}></Image>
        </View>
      </View>
    )
}