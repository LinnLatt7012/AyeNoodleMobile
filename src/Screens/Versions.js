import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import Version from '../components/Version';
const Versions = ({navigation, route}) => {
  const {versions, productName, productID, activeVersion} = route.params;
  useEffect(() => {
    navigation.setOptions({title: productName[1]});
  }, []);
  const renderItem = ({item}) => (
    <Version
      version={item}
      productID={productID}
      productName={productName[1]}
      isActive={activeVersion == item.id}
    />
  );
  return (
    <View style={{marginTop: 5}}>
      <FlatList
        data={versions}
        renderItem={renderItem}
        keyExtractor={version => version.id}
      />
    </View>
  );
};

export default Versions;
