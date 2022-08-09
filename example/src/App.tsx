import {
  Alert,
  Button,
  Checkbox,
  CheckboxItem,
  CheckboxValue,
  Div,
  Divider,
  Input,
  PText,
  Radio,
} from 'cherag-ui';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../src/Theme';
import Loader from '../../src/components/Loader';

export default function App() {
  const [userName, setUserName] = useState<string>();
  const [selectItem, setSelectItem] = useState<string>();
  const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>([]);
  const [alert, setAlert] = useState<Boolean>(false);

  const blackColor = 'black';

  return (
    <Div style={styles.container}>
      <PText style={{ color: blackColor }} fontSize="md">
        text Commponent
      </PText>
      <Div bg={'gray'} w={0} h={0} p={0} m={0}>
        <PText>Div Commponent</PText>
      </Div>
      <Div style={styles.radioGroup}>
        <Radio
          width={150}
          onPress={() => {
            setSelectItem('Radio button 1');
          }}
        >
          Radio Button 1
        </Radio>
        <Radio
          width={150}
          onPress={() => {
            setSelectItem('Radio button 2');
          }}
        >
          Radio Button 1
        </Radio>
      </Div>
      <PText>{selectItem}</PText>
      <PText>Checkbox Test</PText>
      <Checkbox values={checkboxes} onChange={setCheckboxes}>
        <CheckboxItem value="1">Checkbox 1</CheckboxItem>
        <CheckboxItem value="2">Checkbox 2</CheckboxItem>
        <CheckboxItem value="3">Checkbox 3</CheckboxItem>
      </Checkbox>
      <Loader color={COLORS.green} size={'large'} />
      <Input
        //@ts-ignore
        onChangeText={(txt) => {
          setUserName(txt);
        }}
        value={userName}
        placeholder="enter name"
        leftIcon="lock"
        rightIcon="eye"
      />
      <Button
        onPress={() => {
          console.log('Custom button pressed');
          setAlert(!alert);
        }}
      >
        Button
      </Button>

      <Alert status="warning" title="Item deleted !!!" />

      <Divider color={COLORS.darkGray} thickness={1} />
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    // backgroundColor: 'cyan',
    width: '100%',
  },
  radioGroup: {
    flexDirection: 'row',
  },
});
