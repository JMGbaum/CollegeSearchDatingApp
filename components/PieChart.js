import {PieChart as PC} from "react-native-chart-kit";
import { styles } from "../Styles";
import React from "react";
import { View } from "react-native";

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
        <PC
          data={props.data}
          accessor={"value"}
          backgroundColor={props.backgroundColor ? props.backgroundColor : "#ffffff"}
          style={{margin: "auto"}}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
          }}
          height={50}
          width={50}
          />
      </View>
    )
}