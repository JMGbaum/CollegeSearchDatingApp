import Chart from 'react-google-charts';
import { styles } from "../Styles";
import React from "react";
import { View } from "react-native";

export const PieChart = (props) => {
    return (
      <View style={styles.piechart}>
        <Chart
          chartType="PieChart"
          data={props.data}
          options={{
            title: props.title,
            backgroundColor: props.backgroundColor ? props.backgroundColor : "#ffffff",
          }}
          style={{margin: "auto"}}
          />
      </View>
    )
}