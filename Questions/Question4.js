import React from 'react';
import { Button, View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import { Checkbox } from './checkbox2';
import { Special_interest } from './special_dd';
import { Religious } from './religious_dd';

const fs = require('expo-file-system');

export const Q4 = (props) => {
  return (
    <SafeAreaView >
      <Text style = {styles.title_text}>Are you looking for a special interest school? </Text>
      <Text style = {styles.text}>Ex: Historically Black Colleges, Ivy Leagues</Text>
        <Formik
          initialValues={{
              special_interest: false,
              religious_interest: false,
              special: [],
              religious: [],
          }}
          onSubmit={(values, { resetForm }) => {
            fs.readAsStringAsync(fs.documentDirectory + "data.json").then(data => {
              const local_data = JSON.parse(data);
              local_data.preferences.interests.special = values.special;
              local_data.preferences.interests.religious = values.religious;
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
                      name={"special_interest"}
                      isChecked={values?.special_interest}
                      setFieldValue={setFieldValue}
                  >
                    <Text style={styles.text}>Click for Special Interest</Text>
                  </Checkbox>
                  <Checkbox 
                      name={"religious_interest"}
                      isChecked={values?.religious_interest}
                      setFieldValue={setFieldValue} 
                  >
                    <Text style={styles.text}>Click for Religious Affliation</Text>
                 
                  </Checkbox>
                  {values.special_interest != false?  <Special_interest name="special" setFieldValue={setFieldValue}/>:  null}
                  {values.religious_interest != false?  <Religious name="religious" setFieldValue={setFieldValue}/>:  null}
                
                  <Button onPress={handleSubmit} title="Submit"></Button> 
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
  text:{
    fontSize: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Q4;