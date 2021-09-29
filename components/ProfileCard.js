import { styles } from "../Styles";
import React from "react";
import { View } from "react-native";
import { ProfileBlock } from ".";

export const ProfileCard = (props) => {
    return (
      <View style={styles.profilecard}>
        <ProfileBlock title={props.title}/>
      </View>
    )
}