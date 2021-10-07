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
          <PieChart
            backgroundColor="transparent"
            data={[
              {
                name:"Male",
                value:40,
                color:"#8ce0ed"
              },
              {
                name:"Female",
                value:50,
                color:"#ffd1fb"
              },
              {
                name:"Other",
                value:10,
                color:"#bdffbd"
              },
            ]}
          />
        </View>
      </View>
    )
}