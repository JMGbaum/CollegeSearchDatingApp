import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';

export function Register2(){
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState([
        {label: 'Freshman', value: '1'},
        {label: 'Sophomore', value: '2'},
        {label: 'Junior', value: '3'},
        {label: 'Senior', value: '4'},
      ]);
      return(
        <SafeAreaView style = {styles.registerContainer}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                multiple={false}
            />
        </SafeAreaView>
        
      );
}

export default Register2;

const styles = StyleSheet.create({

    registerContainer: {
      //width: '80%',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      elevation: 10,
      backgroundColor: '#9BD1D1',
      justifyContent: 'center',
    },
    textInput: {
      height: 40,
      width: '100%',
      margin: 10,
      backgroundColor: 'white',
      borderColor: 'pink',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
    },
  })