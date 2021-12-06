import { InfoBlock } from "./InfoBlock.js";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const InfoCard = (props) => {
    return (
      <View>
        <LinearGradient style={styles.infocard} start={{x:0, y:1}} end={{x:1, y:0}} colors={["#717171", "#919191", "#a1a1a1", "#919191", "#717171"]}>
          <InfoBlock title={props.title} data={props.data}/>
          <Text>{"Admission  Rate: " + props.admission_rate}</Text>
          <Text>{"Admission  SAT Scores: " + props.admission_sat_scores}</Text>
         
          <Text>{"Cost: " + props.cost}</Text>
          
          <Text>{"Historically Black: " + props.historicallyblack}</Text>
          
          <Text>{"Ownership: " + props.owner}</Text>
          <Text>{"Religion Affiliation: " + props.religion}</Text>
          
          <Text>{"Demographics- Men: " + props.demomen}</Text>
          <Text>{"Demographics- Women: " + props.demowomen}</Text>
          <Text>{"AIANR: " + props.aianr}</Text>
          <Text>{"Asian: " + props.asianr}</Text>
          <Text>{"Asian Pacific: " + props.asianpacificr}</Text>
          <Text>{"Black: " + props.blackr}</Text>
          <Text>{"Black Non-Hispanic: " + props.blacknonhispanic}</Text>
          <Text>{"Hispanic: " + props.hispanicr}</Text>
          <Text>{"NHPIR: " + props.nhpir}</Text>
          <Text>{"Non Resident : " + props.nonresidentr}</Text>
          <Text>{"Two or More: " + props.twormore}</Text>
          <Text>{"Unknown Race: " + props.unknownr}</Text>
          <Text>{"White: " + props.whiter}</Text>
          <Text>{"White Non-Hispanic: " + props.whitenonhispanicr}</Text>
          <Text>{"Grad Students: " + props.gradstudent}</Text>
          <Text>{"Student Body: " + props.studentsize}</Text>
          <Text>{"Degrees Awarded: " + props.degreesawarded}</Text>
          






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