import {PieChart as PC} from "react-native-chart-kit";
import { SCREEN_WIDTH, FONT, styles } from "../Styles";
import React from "react";
import { View, Text } from "react-native";

const chartConfig = {
  /*backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,*/
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  //arPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

export const PieChart = (props) => {
    return (
      <View style={styles.piechart}>
        <Text style={{alignSelf:"center", color:"#fff", fontFamily: FONT, fontSize: 14}}>{props.data.title}</Text>
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
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
          }}
          height={100}
          width={SCREEN_WIDTH*0.6}
          />
      </View>
    )
}