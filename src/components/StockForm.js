import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {Button, TextInput} from 'react-native-paper';
import {useSelector} from 'react-redux';
import axios from 'axios';
import Picker from './Picker';
import {BASE_URL} from '../config';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {ButtonText, HeaderText, NotiText, Placeholder} from '../language';
const options = [
  {enName: 'In', mmName: 'အဝင်', value: 1},
  {enName: 'Out', mmName: 'အထွက်', value: 2},
  {enName: 'Ready-made', mmName: 'အသင့်စား', value: 3},
];
const StockForm = () => {
  const {colors} = useTheme();
  const [quantity, setQuantity] = useState(0);
  const {products} = useSelector(state => state.products);
  const {user} = useSelector(state => state.auth);
  const {language} = useSelector(state => state.setting);
  const [option, setOption] = useState(1);
  const [productID, setProductID] = useState(0);
  const styles = StyleSheet.create({
    mainComponent: {
      display: 'flex',
      color: 'black',
      flexDirection: 'row',
      backgroundColor: colors.background,
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      padding: 20,
      alignItems: 'center',
      zIndex: 10,
    },
    textInput: {
      width: '100%',
      height: 40,
      color: colors.text,
      backgroundColor: colors.background,
      borderRadius: 5,
      marginTop: 20,
    },
    Submit: {
      backgroundColor: colors.primary,
      marginTop: 15,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignSelf: 'center',
    },
  });
  const onStockHandler = async () => {
    try {
      if (productID == 0) {
        Alert.alert(
          NotiText[language].productError.title,
          NotiText[language].productError.message,
          [{text: NotiText[language].ok}],
        );
      } else if (quantity == 0) {
        Alert.alert(
          NotiText[language].quantityError.title,
          NotiText[language].quantityError.message,
          [{text: NotiText[language].ok}],
        );
      } else {
        Alert.alert(
          NotiText[language].stockNoti.title(option == 1),
          NotiText[language].stockNoti.title(quantity, option == 1),
          [
            {
              text: ButtonText[language].ok,
              onPress: async () => {
                await axios
                  .post(
                    `${BASE_URL}/api/stocks/`,
                    {
                      productID,
                      status: parseInt(option),
                      quantity: parseInt(quantity),
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${user.jwt}`,
                      },
                    },
                  )
                  .then(() => {
                    setProductID(1);
                    setQuantity(1);
                    setOption(1);
                  })
                  .catch(err => console.log('err at stock'));
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
        ...styles.mainComponent,
      }}>
      <Picker
        setValue={setProductID}
        value={productID}
        items={products}
        label={`${language}Name`}
        style={{zIndex: 5, backgroundColor: colors.background}}
        dropDownContainerStyle={{zIndex: 10}}
        val="productID"
        placeholder={Placeholder[language].product}
      />
      <Picker
        setValue={setOption}
        value={option}
        items={options}
        label={`${language}Name`}
        style={{marginTop: 10, zIndex: 5, backgroundColor: colors.background}}
        dropDownContainerStyle={{zIndex: 5}}
        contain
        val="value"
        placeholder={Placeholder[language].option}
      />
      <TextInput
        onChangeText={setQuantity}
        placeholder={Placeholder[language].quantity}
        value={quantity}
        style={styles.textInput}
        keyboardType="numeric"
        textContentType="numeric"
        underlineColor={colors.primary}
      />
      <View style={{width: '100%'}}>
        <Button
          compact
          color={colors.text}
          onPress={onStockHandler}
          children={ButtonText[language].stockSubmit(option == 1)}
          style={{
            ...styles.Submit,
          }}
        />
      </View>
    </View>
  );
};

export default StockForm;
