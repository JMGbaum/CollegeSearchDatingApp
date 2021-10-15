import {InfoCard} from "./InfoCard";
import { ProfileCard } from "./ProfileCard";
import React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { styles } from "../Styles";

export const Card = (props) => {
    return (
       <ScrollView style={{...styles.card, zIndex:props.zIndex}}>
         <ProfileCard title={props.title} location={props.location} image={props.image}/>
         <InfoCard data={props.data} />
       </ScrollView>
    )
}