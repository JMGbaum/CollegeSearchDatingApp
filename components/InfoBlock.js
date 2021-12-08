import React from "react";
import { View, StyleSheet } from "react-native";
import { PieChart } from "./PieChart";

export const InfoBlock = (props) => {
    return (
      <View>
        <PieChart
          backgroundColor="transparent"
          data={props.data}
          height={props.height}
          legend={props.legend}
          center={props.center ? props.center : 0}
        />
      </View>
    )
}