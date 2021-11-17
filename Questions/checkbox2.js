import React from 'react';
import { Text, View } from 'react-native';
import CheckBox from 'react-native-check-box';

export const Checkbox = ({children, ...props}) => {
    return (
        <View style={{flexDirection:"row", alignItems:"center"}}>
        <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={()=>{
                props.setFieldValue(props.name, !props.isChecked);
            }}
            isChecked={props.isChecked}
        />
        <Text> {children} </Text>
        </View>

        
    )
}
