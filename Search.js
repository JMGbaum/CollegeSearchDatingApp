
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button,Dimensions } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

export const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
         

        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {props.clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              props.setSearchPhrase("")
          }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {props.clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};
//export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {

    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    padding: 30,
  
    
    //bottom:650,
    //resizeMode: "contain",
    

  },
  searchBar__unclicked: {
  
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    
  },
  searchBar__clicked: {
    
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});

// const SearchBar =()=> {
//   return(
//       <View style = {styles.container}>
//           <TextInput placeholder="Search here..."/>
//       </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 100,
//     width: '80%',
//     alignItems: 'center',
//     padding: 10,
//     elevation: 10,
//     backgroundColor: '#ffffff',
//   }, 
//   searchInput:{
//     width: '50%', 
//     height: '100%',
//     paddingLeft: 8,
//     fontSize: 20
//    }
  
// })

// export default SearchBar;