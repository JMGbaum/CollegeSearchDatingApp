import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';

export function Religious(props){
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(props.initialValues ? props.initialValues : null);
      const [items, setItems] = useState([
        {label: 'American Evangelical Lutheran Church', value: 'AELC'},
        {label: 'African Methodist Episcopal Zion Church', value: 'AMEZC'},
        {label: 'Assemblies of God Church', value: 'AGC'},
        {label: 'Brethren Church', value: 'BC'},
        {label: 'Roman Catholic', value: 'RC'},
        {label: 'Wisconsin Evangelical Lutheran Synod', value: 'WELS'},
        {label: 'Christ and Missionary Alliance Church', value: 'CMAC'},
        {label: 'Christian Reformed Church', value: 'CRC'},
        {label: 'Evangelical Congregational Church', value: 'ECC'},
        {label: 'Evangelical Covenant Church of America', value: 'ECCOA'},
        {label: 'Evangelical Free Church of America', value: 'EFCOA'},
        {label: 'Evangelical Lutheran Church', value: 'ELC'},
        {label: 'International United Pentecostal Church', value: 'IUPC'},
        {label: 'Free Will Baptist Church', value: 'FWBC'},
        {label: 'Interdenominational', value: 'ID'},
        {label: 'Mennonite Brethren Church', value: 'MBC'},
        {label: 'Moravian Church', value: 'MC'},
        {label: 'North American Baptist', value: 'NAB'},
        {label: 'Pentecostal Holiness Church', value: 'PHC'},
        {label: 'Christian Churches and Churches of Christ', value: 'CCCC'},
        {label: 'Reformed Church in America', value: 'RCA'},
        {label: 'Episcopal Church, Reformed', value: 'ECR'},
        {label: 'African Methodist Episcopal', value: 'AME'},
        {label: 'American Baptist', value: 'AB'},
        {label: 'American Lutheran', value: 'AL'},
        {label: 'Baptist', value: 'BAPTIST'},
        {label: 'Christian Methodist Episcopal', value: 'CME'},
        {label: 'Church of God', value: 'COGOD'},
        {label: 'Church of Brethren', value: 'COB'},
        {label: 'Church of the Nazarene', value: 'CON'},
        {label: 'Cumberland Presbyterian', value: 'CP'},
        {label: 'Christian Church (Disciples of Christ)', value: 'DOC'},
        {label: 'Free Methodist', value: 'FM'},
        {label: 'Friends', value: 'FRIENDS'},
        {label: 'Presbyterian Church (USA)', value: 'PCUSA'},
        {label: 'Lutheran Church in America', value: 'LCUSA'},
        {label: 'Lutheran Church - Missouri Synod', value: 'LCMS'},
        {label: 'Mennonite Church', value: 'MC2'},
        {label: 'United Methodist', value: 'UM'},
        {label: 'Protestant Episcopal', value: 'PE'},
        {label: 'Churches of Christ', value: 'COC'},
        {label: 'Southern Baptist', value: 'SB'},
        {label: 'United Church of Christ', value: 'UCOC'},
        {label: 'Protestant, not specified', value: 'PNS'},
        {label: 'Multiple Protestant Denomination', value: 'MPD'},
        {label: 'Other Protestant', value: 'OP'},
        {label: 'Jewish', value: 'JEW'},
        {label: 'Reformed Presbyterian Church', value: 'RPC'},
        {label: 'United Brethren Church', value: 'UBC'},
        {label: 'Missionary Church Inc', value: 'MCINC'},
        {label: 'Undenominational', value: 'UNDEMO'},
        {label: 'Wesleyan', value: 'WES'},
        {label: 'Greek Orthodox', value: 'GO'},
        {label: 'Russian Orthodox', value: 'RO'},
        {label: 'Unitarian Universalist', value: 'UU'},
        {label: 'Latter Day Saints (Mormon Church)', value: 'LDS'},
        {label: 'Seventh Day Adventists', value: 'SDA'},
        {label: 'The Presbyterian Church in America', value: 'PCA'},
        {label: 'Original Free Will Baptist', value: 'OFWB'},
        {label: 'Ecumenical Christian', value: 'ECUC'},
        {label: 'Evangelical Christian', value: 'EVANC'},
        {label: 'Presbyterian', value: 'PRES'},
        {label: 'General Baptist', value: 'GB'},
        {label: 'Muslim', value: 'MUSLIM'},
        {label: 'Plymouth Brethren', value: 'PB'},

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
                max={64}
                onChangeValue={(val)=>{
                  props.setFieldValue(props.name, val);
                }}
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

export default Religious;