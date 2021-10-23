import {Card} from "../components/";
import React from "react";
import { View } from "react-native";

export const Stack = () => {
    return (
       <View style={{alignItems:"center", zIndex:10}}>
         <Card data={pieChartData} zIndex={3} title="Muhlenberg College" image="https://muhlenberg.edu/media/contentassets/images/homepage/Haas-Homepage1.jpg" location="Allentown, PA"/*/>
         <Card data={pieChartData} zIndex={2} style={{position:"absolute", alignSelf:"center", top:"2%", left:"2%"}}*//>
       </View>
    )
}

const pieChartData = {
  title: "Student Body Gender Disparity",
  data:[
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
  ]
}