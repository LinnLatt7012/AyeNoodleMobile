import {View, FlatList, Text} from 'react-native';
import React, {useEffect} from 'react';
import Version from '../components/Version';
import {useTheme} from '@react-navigation/native';
const Versions = ({navigation, route}) => {
  const {versions, productName, productID, activeVersion} = route.params;
  const {colors} = useTheme();
  useEffect(() => {
    navigation.setOptions({title: productName});
  }, []);
  const renderItem = ({item}) => (
    <Version
      version={item}
      productID={productID}
      productName={productName}
      isActive={activeVersion == item.id}
    />
  );
  return (
    <View
      style={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '95%',
      }}>
      <Text
        style={{
          color: colors.text,
          alignSelf: 'center',
          justifyContent: 'space-between',
          fontSize: 25,
          marginVertical: 5,
          fontWeight: '800',
        }}>
        All versions
      </Text>
      <FlatList
        data={versions}
        renderItem={renderItem}
        keyExtractor={version => version.id}
      />
      <View
        style={{
          justifyContent: 'flex-end',
          alignContent: 'space-between',
          alignSelf: 'center',
        }}>
        <Text style={{color: colors.text}}>Here</Text>
      </View>
    </View>
  );
};

export default Versions;
