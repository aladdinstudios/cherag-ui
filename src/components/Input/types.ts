import type { ComponentProps } from 'react';
import type {
  GestureResponderEvent,
  StyleProp,
  TextInput,
  ViewStyle,
} from 'react-native';

export interface InputProps
  extends Omit<ComponentProps<typeof TextInput>, 'children'> {
  style?: StyleProp<ViewStyle>;
  testID?: string;
  placeholder?: string;
  onPressLeftIcon?: (event: GestureResponderEvent) => void;
  onPressRightIcon?: (event: GestureResponderEvent) => void;
  leftIcon?: string;
  leftIconColor?: string;
  rightIcon?: string;
  rightIconColor?: string;
  fontSize?: number;
  iconSize?: number;
  borderWidth?: number;
  borderColor?: string;
  w?: number;
  h?: number;
  textPadding?: number;
}
