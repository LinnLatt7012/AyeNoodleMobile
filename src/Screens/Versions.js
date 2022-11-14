import {View, FlatList, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Version from '../components/Version';
import {useTheme} from '@react-navigation/native';
import Dialog from '../components/Dialog';
import {Button} from 'react-native-paper';
import {memo} from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {BASE_URL} from '../config';
import {ButtonText, HeaderText, Placeholder, NotiText} from '../language';
import Noti from '../components/Noti';
const Versions = ({navigation, route}) => {
  const {versions, productName, productID, activeVersion} = route.params;
  const {colors} = useTheme();
  const {user} = useSelector(state => state.auth);
  const {language} = useSelector(state => state.setting);
  const [visible, setVisible] = useState(false);
  const [unitPrice, setUnitPrice] = useState(0);
  useEffect(() => {
    navigation.setOptions({title: productName});
  }, [productName]);
  const renderItem = ({item}) => (
    <Version
      version={item}
      productID={productID}
      productName={productName}
      isActive={activeVersion == item.id}
    />
  );
  const addNewPrice = async () => {
    try {
      if (parseInt(unitPrice) <= 0) {
        Noti(
          NotiText[language].priceError.title,
          NotiText[language].priceError.message,
          [{text: NotiText[language].ok}],
        );
        setVisible(false);
      } else {
        Alert.alert(
          `${productName}`,
          NotiText[language].addUnitPrice.message(unitPrice, productName),
          [
            {
              text: ButtonText[language].ok,
              onPress: async () => {
                await axios
                  .post(
                    `${BASE_URL}/api/products/${productID}/versions`,
                    {unitPrice},
                    {
                      headers: {
                        Authorization: `Bearer ${user.jwt}`,
                      },
                    },
                  )
                  .then(() => {
                    setVisible(false);
                    navigation.navigate('productList');
                  });
              },
            },
            {
              text: ButtonText[language].cancle,
              style: 'cancel',
            },
          ],
        );
      }
    } catch (error) {
      console.log('Post error', error);
    }
  };
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
        {HeaderText[language].allVersion}
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
        <Button onPress={() => setVisible(true)} mode="contained">
          {ButtonText[language].addNewPrice}
        </Button>
        <Dialog
          visible={visible}
          setVisible={setVisible}
          value={unitPrice}
          setValue={setUnitPrice}
          label={Placeholder[language].newPrice}
          title={HeaderText[language].addNewPrice}
          buttonText={ButtonText[language].addNewPrice}
          submitHandler={addNewPrice}
        />
      </View>
    </View>
  );
};

export default memo(Versions);
