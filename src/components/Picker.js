import {View, Text} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
const Picker = ({value, setValue, items, label, val, ...props}) => {
  const [open, setOpen] = useState(false);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      {...props}
      schema={{
        label: label,
        value: val,
        // icon: () => <FontAwesomeIcons name="home" size={24} />,
      }}
    />
  );
};

export default Picker;
