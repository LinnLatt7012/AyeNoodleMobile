import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/Header';
import {headers} from '../language';
import {useDispatch, useSelector} from 'react-redux';
import {setLan} from '../Redux/actions';

const Profile = () => {
  const {language} = useSelector(state => state.setting);
  const dispatch = useDispatch();

  return (
    <>
      <Header headerText={headers[language].profile} />
    </>
  );
};

export default Profile;
