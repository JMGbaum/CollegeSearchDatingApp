import { styles } from "../Styles";
import React from "react";
import { View, Text } from "react-native";
import { PieChart } from ".";

export const InfoBlock = (props) => {
    return (
      <View>
        <View style={styles.infoblock}>
          <Text style={{color: "#ffffff", ...styles.nomargins}}>{props.title}</Text>
        </View>
        <View>
          <PieChart title="Student Body Breakdown by Gender"
            backgroundColor="transparent"
            data={[
              ["Gender", "Percentage of Student Body"],
              ["Male", 40],
              ["Female", 50],
              ["Other", 10],
            ]}
          />
        </View>
      </View>
    )
}