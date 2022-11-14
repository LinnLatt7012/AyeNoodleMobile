import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {Button, Dialog, Portal, TextInput} from 'react-native-paper';

const Modal = ({
  title,
  buttonText,
  value,
  setValue,
  visible,
  setVisible,
  submitHandler,
  label,
}) => {
  const {colors} = useTheme();

  return (
    <Portal>
      <Dialog
        style={{backgroundColor: colors.card, borderRadius: 8}}
        visible={visible}
        onDismiss={() => setVisible(false)}>
        <Dialog.Title style={{color: colors.text}}>{title}</Dialog.Title>
        <Dialog.Content>
          <TextInput
            outlineColor={colors.text}
            activeOutlineColor={colors.primary}
            style={{
              backgroundColor: colors.card,
            }}
            value={value}
            onChangeText={text => setValue(text)}
            mode="outlined"
            label={label}
            placeholder={label}
            keyboardType="numeric"
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={submitHandler}>{buttonText}</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default Modal;
