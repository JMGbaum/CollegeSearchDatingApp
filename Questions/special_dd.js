import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';

export function Special_interest(){
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState([
        {label: 'Historically Black Insitution', value: 'HBCU'},
        {label: 'Predominantly Black Institution', value: 'PBI'},
        {label: 'Alaska Native Native Hawaiian Serving Institution', value: 'ANNHI'},
        {label: 'Tribal Insitution', value: 'Tribal'},
        {label: 'Hispanic-serving Institution', value: 'HSI'},
        {label: 'Native American non-tribal Institution', value: 'NANTI'},
        {label: 'Men-only Institution', value: 'MENONLY'},
        {label: 'Women-only Institution', value: 'WOMENONLY'},

      ]);
      return(
        <SafeAreaView style = {styles.loginContainer}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                multiple={true}
                min={0}
                max={9}
            />
        
        </SafeAreaView>
        
      );
}

const styles = StyleSheet.create({
  loginContainer: {
    height: 270,
    width: '55%',
    alignItems: 'center',
    padding: 10,
    elevation: 10,
    backgroundColor: '#9BD1D1',
  },
  text:{
    fontSize: 20,
  }
})

export default Special_interest;