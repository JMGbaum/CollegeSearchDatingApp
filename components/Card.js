import {InfoCard} from "./InfoCard";
import { ProfileCard } from "./ProfileCard";
import React from "react";
import { Dimensions, ScrollView, View } from "react-native";

export const Card = (props) => {
    return (
       <ScrollView style={{height: Dimensions.get("window").height - 20, position:"absolute", alignSelf:"center", zIndex:props.zIndex, ...props.style}}>
         <ProfileCard title={props.title} location={props.location} image={props.image}/>
         <InfoCard data={props.data} />
       </ScrollView>
    )
}