import { InfoBlock } from "./InfoBlock.js";
import React from "react";
import { View, StyleSheet, Text, ShadowPropTypesIOS } from "react-native";
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
          { props.admission_rate ? <Text>{"Admission Rate: " + props.admission_rate*100 + "%"}</Text> : null }
          { props.admission_sat_scores ? <Text>{"Average SAT Score: " + props.admission_sat_scores}</Text> : null }
         
          { props.cost ? <Text>{"Cost: " + props.cost}</Text> : null }
          
          { props.historicallyblack ? <Text>{"Historically Black: " + !!props.historicallyblack}</Text> : null }
          
          {/*props.owner ? <Text>{"Ownership: " + props.owner}</Text> : null*/}
          { props.religion ? <Text>{"Religious Affiliation: " + props.religion}</Text> : null }

          { props.gradstudent ? <Text>{"Grad Students: " + props.gradstudent}</Text> : null }
          { props.studentsize ? <Text>{"Student Body Size: " + props.studentsize}</Text> : null }
          { props.degreesawarded ? <Text>{"Degrees Awarded: " + props.degreesawarded}</Text> : null }
          
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