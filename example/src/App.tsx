import {
  Button,
  Checkbox,
  CheckboxItem,
  CheckboxValue,
  Div,
  Input,
  PText,
  Radio,
  Alert,
} from 'cherag-ui';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

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
      <Div bg={'gray'} w={0} h={0} p={0} m={0} style={{ color: blackColor }}>
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
      {/* <Loader color={COLORS.green} size={'large'} /> */}
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

      <Alert
        status="success"
        paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum at this time.processed at this time. processed at this time."
      >
        Item deleted !!!
      </Alert>
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  radioGroup: {
    flexDirection: 'row',
  },
});
