import {InfoCard, ProfileCard} from "../components/";
import React from "react";
import { Dimensions, ScrollView } from "react-native";

export const Stack = () => {
    return (
       <ScrollView style={{height: Dimensions.get("window").height - 20}}>
         <ProfileCard title="EXAMPLE COLLEGE"/>
         <InfoCard title="EXAMPLE COLLEGE"/>
       </ScrollView>
    )
}