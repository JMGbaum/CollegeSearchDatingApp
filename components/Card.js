import { InfoCard } from "./InfoCard";
import { ProfileCard } from "./ProfileCard";
import React from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";

export const Card = (props) => {
    return (
       <ScrollView style={{...styles.card}}>
         <ProfileCard title={props.title} location={props.location} image={props.image}/>
         <InfoCard data={props.data} />
       </ScrollView>
    )
}

const styles = StyleSheet.create({
  card: {
    height: Dimensions.get("screen").height,
    marginBottom: Dimensions.get("screen").height*0.062,
  },
});