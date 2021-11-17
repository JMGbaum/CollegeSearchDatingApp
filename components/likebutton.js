import { FONT } from "../Styles";
import React, { useState }from "react";
import { View, Text, Image, StyleSheet, Button, Pressable, Dimensions, SafeAreaView} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Like_Button= (props) => {
    const [liked, setLiked] = useState(false);
    return (
      <SafeAreaView>
         <View>
            <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
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