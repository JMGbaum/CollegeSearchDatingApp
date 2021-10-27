import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';
import { SafeAreaView, Text} from 'react-native';

export function Fifty_states(){
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState([
        {label: 'Alabama', value: 'AL'},
        {label: 'Alaska', value: 'AK'},
        {label: 'Arizona', value: 'AZ'},
        {label: 'Arkansas', value: 'AR'},
        {label: 'California', value: 'CA'},
        {label: 'Colorado', value: 'CO'},
        {label: 'Connecticut', value: 'CT'},
        {label: 'Delaware', value: 'DE'},
        {label: 'DC', value: 'DC'},
        {label: 'Florida', value: 'FL'},
        {label: 'Georgia', value: 'GA'},
        {label: 'Hawaii', value: 'HI'},
        {label: 'Idaho', value: 'ID'},
        {label: 'Illinois', value: 'IL'},
        {label: 'Indiana', value: 'IN'},
        {label: 'Iowa', value: 'IA'},
        {label: 'Kanas', value: 'KS'},
        {label: 'Kentucky', value: 'KY'},
        {label: 'Louisiana', value: 'LA'},
        {label: 'Maine', value: 'ME'},
        {label: 'Maryland', value: 'MD'},
        {label: 'Massachusetts', value: 'MA'},
        {label: 'Michigan', value: 'MI'},
        {label: 'Minnesota', value: 'MN'},
        {label: 'Mississippi', value: 'MS'},
        {label: 'Missouri', value: 'MO'},
        {label: 'Montana', value: 'MT'},
        {label: 'Nebraska', value: 'NE'},
        {label: 'Nevada', value: 'NV'},
        {label: 'New Hampshire', value: 'NH'},
        {label: 'New Jersey', value: 'NJ'},
        {label: 'New Mexico', value: 'NM'},
        {label: 'New York', value: 'NY'},
        {label: 'North Carolina', value: 'NC'},
        {label: 'North Dakota', value: 'ND'},
        {label: 'Ohio', value: 'OH'},
        {label: 'Oklahoma', value: 'OK'},
        {label: 'Oregon', value: 'OR'},
        {label: 'Pennsylvania', value: 'PA'},
        {label: 'Rhode Island', value: 'RI'},
        {label: 'South Carolina', value: 'SC'},
        {label: 'South Dakota', value: 'SD'},
        {label: 'Tennessee', value: 'TN'},
        {label: 'Texas', value: 'TX'},
        {label: 'Utah', value: 'UT'},
        {label: 'Vermont', value: 'VT'},
        {label: 'Viginia', value: 'VA'},
        {label: 'Washington', value: 'WA'},
        {label: 'West Virginia', value: 'WV'},
        {label: 'Wisconsin', value: 'WI'},
        {label: 'Wyoming', value: 'WY'},
      ]);
      return(
        <SafeAreaView>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                multiple={true}
                min={0}
                max={50}
            />
        </SafeAreaView>
        
      );
}

export default Fifty_states;