import { FONT } from "../Styles";
import React, { useState }from "react";
import { View, Text, Image, StyleSheet, Button, Pressable, Dimensions, SafeAreaView} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const fs = require('expo-file-system');

function  onPress(value){
  fs.readAsStringAsync(fs.documentDirectory + "data.json").then(data => {
    const local_data = JSON.parse(data);
    local_data.likes.push(value);
    fs.writeAsStringAsync(fs.documentDirectory + "data.json", JSON.stringify(local_data));
    });
}
export const Like_Button= (props) => {
    const [liked, setLiked] = useState(false);
    return (
      <SafeAreaView>
         <View>
            <Pressable onPress={() => {
              setLiked((isLiked) => !isLiked);
              if (props.data) onPress(props.data);
            }}>
            <MaterialCommunityIcons style = {styles.like_button}
                    name={liked ? "heart" : "heart-outline"}
                    size={90}
                    color={liked ? "red" : "white"}
            />
            </Pressable >
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    like_button:{
      width: 100,
      height: 100,
      left: Dimensions.get("screen").width*0.78,
      //resizeMode: "stretch",
      alignItems: "center",
    
    
    },
  });