import { styles } from "../Styles";
import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "./PieChart";

export const InfoBlock = (props) => {
    return (
      <View>
        <PieChart
          backgroundColor="transparent"
          data={props.data}
        />
      </View>
    )
}