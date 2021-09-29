import { InfoBlock } from ".";
import React from "react";
import { View } from "react-native";
import { styles } from "../Styles";

export const InfoCard = (props) => {
    return (
      <View style={styles.infocard}>
        <InfoBlock title={props.title}/>
      </View>
    )
}