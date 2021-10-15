import { FONT, styles } from "../Styles";
import React from "react";
import { Image, View, Text, Dimensions } from "react-native";
import { ProfileBlock } from "./ProfileBlock";
import { LinearGradient } from "expo-linear-gradient";

export const ProfileCard = (props) => {
    return (
      <LinearGradient style={styles.profilecard} start={{x:0, y:1}} end={{x:1, y:0}} colors={["#ff472f", "#ff775f", "#ff876f", "#ff775f", "#ff472f"]}>
        <ProfileBlock title={props.title}/>
        <Image source={{uri:props.image}} style={{width:"150%", height:"90%", resizeMode:"cover", alignSelf:"center", marginTop:10}}/> 
        <View style={{flexDirection:"row", alignSelf:"center", alignItems:"center", marginTop:"5%"}}>
          <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Media_Viewer_Icon_-_Location.svg/1200px-Media_Viewer_Icon_-_Location.svg.png"}} style={{width:30,height:30}}/>
          <Text style={{fontFamily:FONT, fontSize:18, color:"#fff"}}>{props.location}</Text>
        </View>
      </LinearGradient>
    )
}