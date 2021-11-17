// Formik x React Native example
import React from 'react';
import { View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik, Field, Form } from 'formik';
import { Checkbox } from './checkbox2';
import { Button } from 'react-native-elements/dist/buttons/Button';


export const Q2 = (props) => {
  return (
    <SafeAreaView>
      <Text style = {styles.title_text}> Prefered Student Body Size: </Text>
        <Formik
          initialValues={{
              small: false,
              medium: false,
              large: false,
          }}
          onSubmit={(values, { resetForm }) => {
              console.log(values);
              props.navigate("Question 3");
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
                      name={"small"}
                      isChecked={values?.small}
                      setFieldValue={setFieldValue}
                  >
                      <Text style = {styles.text}>Less than 5,000 students</Text> 
                  </Checkbox>
                  <Checkbox 
                      name={"medium"}
                      isChecked={values?.medium}
                      setFieldValue={setFieldValue}
                  >
                      <Text style = {styles.text}>Between 5,000 and 15,000</Text> 
                  </Checkbox>
                  <Checkbox 
                      name={"large"}
                      isChecked={values?.large}
                      setFieldValue={setFieldValue}
                  >
                       <Text style = {styles.text}> Greater than 15,000</Text> 
                  </Checkbox>
                  <Button 
                  buttonStyle={styles.button}
                  onPress={handleSubmit} 
                  title="Submit"></Button>
                  
              </View>
          )}

      </Formik>
    </SafeAreaView>
    
      
  )
}

const styles = StyleSheet.create({
  title_text:{
    fontSize: 25,
    height: 50,
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
    alignItems: 'center',
  }
})

export default Q2;