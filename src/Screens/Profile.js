import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/Header';
import {HeaderText, profile} from '../language';
import {useDispatch, useSelector} from 'react-redux';
import {setLan} from '../Redux/actions';
import {useTheme} from '@react-navigation/native';
import ProfileCol from '../components/ProfileCol';

const Profile = () => {
  const {language} = useSelector(state => state.setting);
  const {colors} = useTheme();
  const {user} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const changeLanHandler = () => {
    dispatch(setLan(language == 'en' ? 'mm' : 'en'));
  };
  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
      <Header headerText={HeaderText[language].profile} />
      <View
        style={{
          height: 120,
          width: 120,
          marginVertical: 40,
          backgroundColor: colors.card,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          borderRadius: 120,
        }}>
        <Text
          style={{
            color: colors.text,
            alignSelf: 'center',
            justifyContent: 'space-between',
            fontSize: 40,
            fontWeight: '500',
          }}>
          {user.email[0].toUpperCase()}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
          elevation: 2,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingTop: 15,
          backgroundColor: colors.card,
        }}>
        <ProfileCol label={profile[language].email} value={user.email} />
        <ProfileCol label={profile[language].role} value={user.role} />
        <TouchableOpacity onPress={changeLanHandler}>
          <ProfileCol
            label={profile[language].language}
            value={profile[language].lan}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
