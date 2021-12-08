import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";

export const Legend = (props) => {
    let sum = props.data["data"].reduce((total, obj) => {return total + obj.value}, 0);
    return (
        <View>
        {
            props.data["data"].map(obj => {
            
                return (
                    <View style={{flexDirection: 'row'}} key={obj.name}>
                        <Icon name="circle" color={obj.color}/>
                        <Text>{(obj.value/sum * 100).toFixed(2) + "% " + obj.name}</Text>
                    </View>
                )
            })
        }
        </View>
    )

}