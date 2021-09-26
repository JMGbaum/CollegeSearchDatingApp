import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ColorValue } from 'react-native';
import Chart from 'react-google-charts';

const ProfileBlock = (props) => {
  return (
    <View>
      <View style={styles.profileblock}>
        <p style={{margin: "0px"}}>{props.title}</p>
      </View>
      <View>
        <Image source={{uri: "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"}}></Image>
      </View>
    </View>
  )
}

const ProfileCard = (props) => {
  return (
    <View style={styles.profilecard}>
      <ProfileBlock name={props.title}/>
    </View>
  )
}

const PieChart = (props) => {
  return (
    <View style={styles.piechart}>
      <Chart
        chartType="PieChart"
        data={props.data}
        options={{
          title: props.title,
          backgroundColor: props.backgroundColor ? props.backgroundColor : "#ffffff",
        }}
        style={{margin: "auto"}}
        />
    </View>
  )
}

const InfoBlock = (props) => {
  return (
    <View>
      <View style={styles.infoblock}>
        <Text style={{margin: "0px"}}>{props.title}</Text>
      </View>
      <View>
        <PieChart title="Student Body Breakdown by Gender"
          backgroundColor="transparent"
          data={[
            ["Gender", "Percentage of Student Body"],
            ["Male", 40],
            ["Female", 50],
            ["Other", 10],
          ]}
        />
      </View>
    </View>
  )
}

const InfoCard = (props) => {
  return (
    <View style={styles.infocard}>
      <InfoBlock title={props.title}/>
    </View>
  )
}

class Stack extends React.Component {
  render() {
    return (
     <View>
       <ProfileCard />
       <InfoCard />
     </View>
     )
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Stack />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilecard: {
    backgroundImage: "linear-gradient(to top right, #ff472f, #ff775f, #ff876f, #ff775f, #ff472f)",
    border: "3px solid #ff9f7f",
    borderRadius: 100,
    padding: "50px",
  },
  profileblock: {
    textAlign: "center",
    backgroundColor: "#ff9f7f",
    borderRadius: 100,
    color: "#fff",
    padding: "5px",
    fontFamily: "verdana",
    fontSize: "50px",
  },
  center: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  },
  piechart: {
    display: "flex",
    maxWidth: "50%",
    margin: "auto",
    paddingTop: "25px",
  },
  infocard: {
    backgroundImage: "linear-gradient(to top right, #717171, #919191, #a1a1a1, #919191, #717171)",
    border: "3px solid #b1b1b1",
    borderRadius: 100,
    padding: "50px",
  },
  infoblock: {
    textAlign: "center",
    backgroundColor: "#b1b1b1",
    borderRadius: 100,
    color: "#fff",
    padding: "5px",
    fontFamily: "verdana",
    fontSize: 50,
  },
});
