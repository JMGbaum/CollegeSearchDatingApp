import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';
//import { styles } from '../Styles';

export function Register2(props){
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState([
        {label: 'Freshman', value: '1'},
        {label: 'Sophomore', value: '2'},
        {label: 'Junior', value: '3'},
        {label: 'Senior', value: '4'},
      ]);
      return(
        <SafeAreaView style = {styles.loginContainer}>
          <Text style = {styles.text}>What class year are you?</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                multiple={false}
                onChangeValue={()=>{
                  props.setFieldValue(props.name, value);
                }}
            />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  loginContainer: {
    height: 240,
    width: '80%',
    alignItems: 'center',
    padding: 10,
    elevation: 10,
    backgroundColor: '#9BD1D1',
    //justifyContent: 'center',
  },
  text:{
    fontSize: 20,
  }
})
export default Register2;

