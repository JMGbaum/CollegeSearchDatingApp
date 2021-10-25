import { InfoBlock } from "./InfoBlock.js";
import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const InfoCard = (props) => {
    return (
      <View>
        <LinearGradient style={styles.infocard} start={{x:0, y:1}} end={{x:1, y:0}} colors={["#717171", "#919191", "#a1a1a1", "#919191", "#717171"]}>
          <InfoBlock title={props.title} data={props.data}/>
        </LinearGradient>
      </View>
    )
}

const styles = StyleSheet.create({
  infocard: {
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "#b1b1b1",
    borderRadius: 100,
    padding: 50,
  },
});