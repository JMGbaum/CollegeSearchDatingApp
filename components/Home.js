import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import List from "../components/List";
import {SearchBar} from "../components/Search";
7
export const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  // get data from api
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://api.data.gov/ed/collegescorecard/v1/schools?api_key=28Elia3PahggRE0b0ynrGpWnBa5zid436ki7J0iE"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {  (

          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          />

      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",

  
  },
  
});
