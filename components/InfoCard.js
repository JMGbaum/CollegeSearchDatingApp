import { InfoBlock } from ".";
import React from "react";
import { View } from "react-native";
import { styles } from "../Styles";
import { LinearGradient } from "expo-linear-gradient";

export const InfoCard = (props) => {
    return (
      <View>
        <LinearGradient style={styles.infocard} start={{x:0, y:1}} end={{x:1, y:0}} colors={["#717171", "#919191", "#a1a1a1", "#919191", "#717171"]}>
          <InfoBlock title={props.title}/>
        </LinearGradient>
      </View>
    )
}