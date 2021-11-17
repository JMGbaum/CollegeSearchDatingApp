import React from 'react';

import { View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik} from 'formik';
import { Button } from 'react-native-elements/dist/buttons/Button';

import { Checkbox } from './checkbox2';

const fs = require('expo-file-system');

export const Q5 = (props) => {
  return (
    <SafeAreaView>
      <Text style={styles.title_text}>Are you looking for a specific program or major? </Text>
      <Text>Example: BFA programs, Conservatories, Schools with Pre-med</Text>
        <Formik
          initialValues={{
              program: false,
          }}
          onSubmit={(values, { resetForm }) => {

              console.log(values);
              props.navigate("Real App");
=======
            fs.readAsStringAsync(fs.documentDirectory + "data.json").then(data => {
              const local_data = JSON.parse(data);
              local_data.preferences.program = values.program;
              fs.writeAsStringAsync(fs.documentDirectory + "data.json", JSON.stringify(local_data));
            });
            console.log(values);
          }}
      >
          {({
              handleChange,
              handleSubmit,
              values,
              setFieldValue
          }) => (
              <View>
                  <Checkbox 
                      name={"program"}
                      isChecked={values?.program}
                      setFieldValue={setFieldValue}
                  >
                      Click for Specific Program
                  </Checkbox>
                  <Button 
                  buttonStyle={styles.button}
                  onPress={handleSubmit} title="Submit"></Button>
              </View>
          )}
      </Formik>
    </SafeAreaView>
    
      
  )
}

const styles = StyleSheet.create({
  title_text:{
    fontSize: 19.5,
    height: 30,
    alignItems: 'center',
  },
  button:{
    backgroundColor: '#ff9f7f',
    margin: 20,
    padding: 10,
    alignItems: 'center',
    flexDirection: "row",
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 350,
  },
  text:{
    fontSize: 15,
    height: 60,
    alignItems: 'center',
  }
})

export default Q5;