import React from 'react';
import { render } from '@testing-library/react-native';
import RestScreen from '../RestScreen';


describe('RestScreen', () => {
  it('renders the rest image and text', () => {
    const { getByText, getByTestId } = render(<RestScreen />);
    const restImage = getByTestId('rest-image');
    const restText = getByText('TAKE A REST!');
    expect(restImage).toBeTruthy();
    expect(restText).toBeTruthy();
  });

  it('starts a 30 second timer on mount and redirects to previous screen after it expires', () => {
    jest.useFakeTimers();
    const navigation = { goBack: jest.fn() };
    const { getByText } = render(<RestScreen navigation={navigation} />);
    expect(getByText('30')).toBeTruthy();
    jest.advanceTimersByTime(30000);
    expect(navigation.goBack).toHaveBeenCalled();
  });
});
