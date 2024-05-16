import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../../theme';
import { Div } from '../Div';
import type { InputProps } from './types';

const Input = ({
  style,
  testID = 'InputTestId',
  placeholder,
  onPressLeftIcon,
  onPressRightIcon,
  leftIcon,
  leftIconColor,
  rightIcon,
  rightIconColor,
  iconSize,
  fontSize,
  borderWidth,
  borderColor,
  w,
  h,
  textPadding,
  ...rest
}: InputProps) => {
  const _iconSize = iconSize || 18;
  const __borderWidth = borderWidth || 1;
  const __borderColor = borderColor || 'green';
  const __w = w || 200;
  const __h = h || 35;
  const __center = 'center';
  const __textPadding = textPadding || 0;

  return (
    <Div style={styles.container}>
      {leftIcon && (
        <Div style={styles.iconLeft}>
          <TouchableOpacity onPress={onPressLeftIcon}>
            <Icons
              name={leftIcon || 'lock'}
              size={_iconSize}
              color={leftIconColor || COLORS.red}
            />
          </TouchableOpacity>
        </Div>
      )}
      <TextInput
        {...rest}
        testID={testID}
        style={[
          style,
          {
            borderColor: __borderColor,
            borderWidth: __borderWidth,
            fontSize: fontSize ? fontSize : SIZES.p1,
            padding: __textPadding,
            width: __w,
            height: __h,
            justifyContent: __center,
          },
        ]}
        placeholder={placeholder}
      />
      {rightIcon && (
        <Div style={styles.iconRight}>
          <TouchableOpacity onPress={onPressRightIcon}>
            <Icons
              name={rightIcon || 'eye'}
              size={_iconSize}
              color={rightIconColor || COLORS.red}
            />
          </TouchableOpacity>
        </Div>
      )}
    </Div>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  iconLeft: {
    width: 20,
    justifyContent: 'center',
    marginRight: 5,
  },
  iconRight: {
    width: 20,
    justifyContent: 'center',
    marginLeft: 5,
  },
});
