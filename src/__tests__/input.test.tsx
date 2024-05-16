import { cleanup, fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Input } from '../components/Input';

afterEach(cleanup);

describe('Button component', () => {
  test('Input component renders a Textinput', () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId('InputTestId');
    expect(input).toBeDefined();
  });

  test('Input component should update its value when typing value', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <Input placeholder="username" onChangeText={onChangeText} />
    );
    expect(getByPlaceholderText('username')).toBeTruthy();
    const input = getByTestId('InputTestId');
    fireEvent.changeText(input, 'Test text');
  });
});
