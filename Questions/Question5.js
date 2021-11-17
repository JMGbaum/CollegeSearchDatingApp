// Formik x React Native example
import React from 'react';
import { View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik} from 'formik';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Checkbox } from './checkbox2';


//add drop down 

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