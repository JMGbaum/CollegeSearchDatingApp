import { styles } from "../Styles";
import React from "react";
import { Image, View, Text } from "react-native";
import { ProfileBlock } from "./ProfileBlock";
import { LinearGradient } from "expo-linear-gradient";

export const ProfileCard = (props) => {
    return (
      <View>
        <LinearGradient style={styles.profilecard} start={{x:0, y:1}} end={{x:1, y:0}} colors={["#ff472f", "#ff775f", "#ff876f", "#ff775f", "#ff472f"]}>
          <ProfileBlock title={props.title}/>
          <Image source={props.image}/> 
          <View>
            <Image source="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Media_Viewer_Icon_-_Location.svg/1200px-Media_Viewer_Icon_-_Location.svg.png"/>
            <Text>{props.location}</Text>
          </View>
        </LinearGradient>
      </View>
    )
}