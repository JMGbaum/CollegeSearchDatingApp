import { InfoCard } from "./InfoCard";
import { ProfileCard } from "./ProfileCard";
import React from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import {Like_Button} from "./likebutton";
import { Dislike_Button } from "./dislikebutton";
import { useLinkProps } from "@react-navigation/native";

export const Card = (props) => {
    return (
       <ScrollView style={{...styles.card}}>
         <ProfileCard title={props.title} location={props.location} image={props.image}/>
         <InfoCard 
         data={props.data}
         racedata={props.racedata}
         admission_rate={props.admission_rate}
         admission_sat_scores={props.satscores}
         //admission_completion_rate_4yr_150nt={props.admission_completion_rate-4yr_150nt}
         //admission_completion_rate_less_than_4yr_150nt={props.admission_completion_rate_less_than_4yr_150nt}
         cost={props.cost}
        
         historicallyblack={props.historicallyblack}
         
         owner={props.owner}
         religion={props.religion}
        
         demomen={props.demomen}
         demowomen={props.demowomen}
         aianr={props.aianr}
         asianr={props.asianr}
         asianpacificr ={props.asianpacificr}
         blackr={props.blackr}
         blacknonhispanic={props.blacknonhispanicr}
         hispanicr={props.hispanicr}
         nhpir={props.nhpir}
         nnonresidentr={props.nonresidentr}
         twormore={props.twormorer}
         unknownr={props.unknownr}
         whiter={props.whiter}
         whitenonhispanicr={props.whitenonhispanicr}
         gradstudent={props.gradstudent}
         studentsize={props.studentsize}
         degreesawarded={props.degreesawarded}
         
         
         

         />
         <Like_Button data={props.data} press={props.press}/>
         <Dislike_Button data={props.data} press={props.press}/>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
  card: {
    height: Dimensions.get("screen").height,
    marginBottom: Dimensions.get("screen").height*0.062,
  },
});