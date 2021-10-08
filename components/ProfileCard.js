import { styles } from "../Styles";
import React from "react";
import { View } from "react-native";
import { ProfileBlock } from ".";
import { LinearGradient } from "expo-linear-gradient";

export const ProfileCard = (props) => {
    return (
      <View>
        <LinearGradient style={styles.profilecard} start={{x:0, y:1}} end={{x:1, y:0}} colors={["#ff472f", "#ff775f", "#ff876f", "#ff775f", "#ff472f"]}>
          <ProfileBlock title={props.title}/>
        </LinearGradient>
      </View>
    )
}