// Formik x React Native example
import React from 'react';
import { View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik} from 'formik';
import { Button } from 'react-native-elements/dist/buttons/Button';

import { Checkbox } from './checkbox2';
import {Special_interest} from './special_dd';
import {Religious} from './religious_dd';

//add drop down 

export const Q4 = (props) => {
  return (
    <SafeAreaView >
      <Text style = {styles.title_text}>Are you looking for a special interest school? </Text>
      <Text style = {styles.text}>Ex: Historically Black Colleges, Ivy Leagues</Text>
        <Formik
          initialValues={{
              Interests: false,
              Religious_interest: false,
          }}
          onSubmit={(values, { resetForm }) => {
              console.log(values);
              props.navigate("Real App");
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
                      name={"Interests"}
                      isChecked={values?.Interests}
                      setFieldValue={setFieldValue}
                  >
                    <Text style={styles.text}>Click for Special Interest</Text>
                  </Checkbox>
                  <Checkbox 
                      name={"Religious_interest"}
                      isChecked={values?.Religious_interest}
                      setFieldValue={setFieldValue} 
                  >
                    <Text style={styles.text}>Click for Religious Affliation</Text>
                 
                  </Checkbox>
                  {values.Interests != false?  <Special_interest/>:  null}
                  {values.Religious_interest != false?  <Religious/>:  null}
                
                  
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
    fontSize: 20,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
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
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Q4;