import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {Button, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {LOGIN, login} from '../Redux/actions';
import NetInfo from '@react-native-community/netinfo';
import Noti from '../components/Noti';
import {useEffect} from 'react';
import axios from 'axios';
import {BASE_URL} from '../config';
const SignIn = ({navigation}) => {
  const {colors} = useTheme();
  const [email, setEmail] = useState('linnlatt@gmail.com');
  const [password, setPassword] = useState('linn23');
  const [errors, setErrors] = useState({});
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    mainComponent: {
      display: 'flex',
      color: 'black',
      alignContent: 'center',
      alignItems: 'center',
      height: '100%',
      textAlign: 'center',
      justifyContent: 'center',
      marginTop: 'auto',
      // backgroundColor: 'red',
    },
    textInput: {
      width: 240,
      height: 40,
      color: colors.text,
      backgroundColor: colors.card,
      marginTop: 15,
      borderRadius: 5,
      borderWidth: 0,
    },
    Submit: {
      backgroundColor: colors.primary,
      marginTop: 15,
      paddingHorizontal: 20,
    },
  });
  const loginHandler = async event => {
    NetInfo.fetch().then(async networkState => {
      if (networkState.isConnected && networkState.isInternetReachable) {
        try {
          const user = JSON.stringify({email, password});
          await axios
            .post(`${BASE_URL}/api/users/signin`, user, {
              headers: {
                'Content-Type': 'application/json',
              },
            })
            .then(res => {
              dispatch({
                type: LOGIN,
                payload: res.data.value,
              });
            })
            .catch(err => {
              console.log(err.response.status);
              if (err.response.status == '401') {
                setErrors({
                  password: err.response.data.message,
                });
              } else {
                setErrors({
                  email: err.response.data.message,
                });
              }
            });
        } catch (err) {
          console.log(err);
        }
      } else {
        Noti('Network Error', 'There is no internet connection', [
          {
            text: 'Ok',
          },
        ]);
      }
    });
  };
  useEffect(() => {}, [errors]);
  return (
    <View style={styles.mainComponent}>
      <Image />
      <Text style={{fontSize: 32, color: colors.text}}>Hello!</Text>
      <Text style={{fontSize: 16, color: colors.text}}>
        Welcome from <Text style={{fontWeight: '200'}}>AyeNoodle</Text>
      </Text>
      <TextInput
        onChangeText={setEmail}
        placeholder="Enter Email"
        value={email}
        style={styles.textInput}
        textContentType="emailAddress"
        underlineColor={colors.primary}
        error={errors?.email}
      />
      <TextInput
        onChangeText={setPassword}
        placeholder="Enter Password"
        value={password}
        style={styles.textInput}
        underlineColor={colors.primary}
        textContentType="password"
        error={errors?.password}
        secureTextEntry
      />
      <Button
        compact
        style={styles.Submit}
        color={colors.text}
        onPress={loginHandler}
        children="Submit"
      />
    </View>
  );
};

export default SignIn;
