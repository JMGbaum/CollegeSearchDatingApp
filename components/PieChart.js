import {PieChart as PC} from "react-native-chart-kit";
import { FONT } from "../Styles";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const chartConfig = {
  /*backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,*/
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  //arPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

export const PieChart = (props) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{props.data.title}</Text>
        <PC
          data={props.data.data.map(e => {
            return {
              ...e,
              legendFontColor: "#000",
              legendFontSize: "#000",
            }
          })}
          accessor={"value"}
          backgroundColor={props.backgroundColor ? props.backgroundColor : "#ffffff"}
          style={{margin: "auto"}}
          chartConfig={chartConfig}
          height={props.height}
          width={Dimensions.get("screen").width*0.6}
          hasLegend={props.legend}
          center={props.center ? props.center : [0, 0]}

          />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: "auto",
    width:"100%",
    paddingTop: 25,
  },
  text: {
    alignSelf:"center",
    color:"#fff",
    fontFamily: FONT,
    fontSize: 14
  }
});