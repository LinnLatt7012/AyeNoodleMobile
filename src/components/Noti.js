import {Alert} from 'react-native';

const Noti = (title, message, actions) => {
  Alert.alert(`${title}`, `${message}`, [...actions]);
};

export default Noti;
