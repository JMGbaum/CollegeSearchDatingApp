import {InfoCard, ProfileCard} from "../components/";
import React from "react";
import { View } from "react-native";

export const Stack = () => {
    return (
       <View>
         <ProfileCard title="EXAMPLE COLLEGE"/>
         <InfoCard title="EXAMPLE COLLEGE"/>
       </View>
    )
}