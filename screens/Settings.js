import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, LogBox } from 'react-native';
import { Formik } from 'formik';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Checkbox } from '../Questions/checkbox2';
import { Special_interest } from '../Questions/special_dd';
import { Religious } from '../Questions/religious_dd';
import Fifty_states from './States_dropdown';

const fs = require("expo-file-system");

export const Settings_Screen = (props) => {
  const [data, setData] = useState(null);
  const componentIsMounted = useRef(true);

  // ignore nested list warning because it works as expected
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    }
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fs.readAsStringAsync(fs.documentDirectory + "data.json");
        if (componentIsMounted.current) {
          setData(JSON.parse(response));
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <Formik
        enableReinitialize={true}
        initialValues={{
          two_year: data ? data.preferences.program_length.two_year : false,
          four_year: data ? data.preferences.program_length.four_year : false,
          small: data ? data.preferences.student_body_size.small : false,
          medium: data ? data.preferences.student_body_size.medium : false,
          large: data ? data.preferences.student_body_size.large : false,
          east: data ? data.preferences.location.east : false,
          mid: data ? data.preferences.location.mid : false,
          west: data ? data.preferences.location.west : false,
          specific: data ? data.preferences.location.specific.length > 0 : false,
          state: data ? data.preferences.location.specific : [],
          special_interest: data ? data.preferences.interests.special.length > 0 : false,
          religious_interest: data ? data.preferences.interests.religious.length > 0 : false,
          special: data ? data.preferences.interests.special : [],
          religious: data ? data.preferences.interests.religious : [],
        }}
        onSubmit={(values, { resetForm }) => {
          fs.readAsStringAsync(fs.documentDirectory + "data.json").then(d => {
            const local_data = JSON.parse(d);
            local_data.preferences.program_length = { two_year: values.two_year, four_year: values.four_year };
            local_data.preferences.student_body_size = { small: values.small, medium: values.medium, large: values.large };
            local_data.preferences.location.east = values.east;
            local_data.preferences.location.mid = values.mid;
            local_data.preferences.location.west = values.west;
            local_data.preferences.location.specific = values.state;
            local_data.preferences.interests.special = values.special;
            local_data.preferences.interests.religious = values.religious;
            fs.writeAsStringAsync(fs.documentDirectory + "data.json", JSON.stringify(local_data));
          });
        }}
      >
        {({
          handleSubmit,
          values,
          setFieldValue
        }) => (
          <ScrollView>
              <Checkbox
                name={"two_year"}
                isChecked={values?.two_year}
                setFieldValue={setFieldValue}
              >
                <Text style={styles.text}>2 year school</Text>
              </Checkbox>
              <Checkbox
                name={"four_year"}
                isChecked={values?.four_year}
                setFieldValue={setFieldValue}
              >
                <Text style={styles.text}>4 year school</Text>
              </Checkbox>
              <Checkbox
                name={"small"}
                isChecked={values?.small}
                setFieldValue={setFieldValue}
              >
                <Text style={styles.text}>Less than 5,000 students</Text>
              </Checkbox>
              <Checkbox
                name={"medium"}
                isChecked={values?.medium}
                setFieldValue={setFieldValue}
              >
                <Text style={styles.text}>Between 5,000 and 15,000</Text>
              </Checkbox>
              <Checkbox
                name={"large"}
                isChecked={values?.large}
                setFieldValue={setFieldValue}
              >
                <Text style={styles.text}> Greater than 15,000</Text>
              </Checkbox>

              <Checkbox
                name={"east"}
                isChecked={values?.east}
                setFieldValue={setFieldValue}
              >
                East Coast
              </Checkbox>
              <Checkbox
                name={"mid"}
                isChecked={values?.mid}
                setFieldValue={setFieldValue}
              >
                Midwest
              </Checkbox>
              <Checkbox
                name={"west"}
                isChecked={values?.west}
                setFieldValue={setFieldValue}
              >
                West Coast
              </Checkbox>
              <Checkbox
                name={"specific"}
                isChecked={values?.specific}
                setFieldValue={setFieldValue}
              >
                Specific State
              </Checkbox>
              {values.specific == true ? <Fifty_states name="state" setFieldValue={setFieldValue} initialValues={values?.state} /> : null}

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
              {values.special_interest != false ? <Special_interest name="special" setFieldValue={setFieldValue} initialValues={values?.special} /> : null}
              {values.religious_interest != false ? <Religious name="religious" setFieldValue={setFieldValue} initialValues={values?.religious} /> : null}

              <Button
                buttonStyle={styles.button}
                onPress={handleSubmit} title="Submit"  
              />
          </ScrollView>
        )}

      </Formik>
      {/*<Text style = {new_styles.title_text}> Welcome to your settings!</Text>
          <Text style = {new_styles.title_text}> Change Name</Text>
          <Text style = {new_styles.title_text}> Change Email</Text>
          <Text style = {new_styles.title_text}> Change Password</Text>
          <Text style = {new_styles.title_text}> Change Preferences</Text>
          <Text style = {new_styles.title_text}> Delete</Text>*/}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title_text: {
    fontSize: 19.5,
    height: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff9f7f',
    margin: 20,
    padding: 10,
    alignItems: 'center',
    flexDirection: "row",
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 350,
  },
  text: {
    fontSize: 15,
    height: 60,
    alignItems: 'center',
  },
  stylize: {
    flex: 1, //flexible
    backgroundColor: '#9BD1D1',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

