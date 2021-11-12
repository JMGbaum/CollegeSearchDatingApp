import { FONT } from "../Styles";
import React, { useState }from "react";
import { View, Text, Image, StyleSheet, Button, Pressable, Dimensions, SafeAreaView} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Dislike_Button= (props) => {
    const [liked, setLiked] = useState(false);
    return (
      <SafeAreaView>
         <View >
         <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
            <MaterialCommunityIcons style = {styles.like_button}
                    name={liked ? "close" : "close"}
                    size={100}
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
        bottom: 100,
        //resizeMode: "contain",
        alignItems: "center",
      
    
    },
  });