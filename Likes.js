import {Like} from "../components/";
import React from "react";
import { FlatList, } from "react-native";
import { settings } from "../local/settings.json";

export const Likes = () => {
    let likeslist = [];
    let likes = database.all(`SELECT * FROM 'likes' WHERE UserID = ${settings.user.ID}`);
    for (var i = 0; i < likes.length(); i++)
    {
        likeslist.push(<Like school={likes[i]}/>);
    }
    return (
       <FlatList>
            {likeslist};
       </FlatList>
    )
}