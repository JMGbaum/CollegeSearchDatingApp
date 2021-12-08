import { InfoBlock } from "./InfoBlock.js";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Legend } from "./Legend.js";

export const InfoCard = (props) => {
    return (
      <View>
        <LinearGradient style={styles.infocard} start={{x:0, y:1}} end={{x:1, y:0}} colors={["#717171", "#919191", "#a1a1a1", "#919191", "#717171"]}>
          <InfoBlock data={props.data} height={100} legend={true}/>
          <View style={{backgroundColor:"#b1b1b1", borderRadius:50, padding:15, marginVertical: 20}}>
            <InfoBlock data={props.racedata} height={200} legend={false} center={[75,0]}/>
            <Legend data={props.racedata}/>
          </View>
          <Text>{"Admission Rate: " + props.admission_rate*100 + "%"}</Text>
          <Text>{"Average SAT Score: " + props.admission_sat_scores}</Text>
         
          <Text>{"Cost: " + props.cost}</Text>
          
          <Text>{"Historically Black: " + !!props.historicallyblack}</Text>
          
          {/*<Text>{"Ownership: " + props.owner}</Text>*/}
          <Text>{"Religious Affiliation: " + props.religion}</Text>

          <Text>{"Grad Students: " + props.gradstudent}</Text>
          <Text>{"Student Body Size: " + props.studentsize}</Text>
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