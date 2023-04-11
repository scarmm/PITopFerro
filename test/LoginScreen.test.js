import { render } from '@testing-library/react-native';
import TelaLogin from '../screens/TelaLogin';

describe('TelaLogin', () => {
  test('renders email and password fields', () => {
    
    
    const { getByTestId } = render(<TelaLogin />);
    const emailField = getByTestId('email');
    const passwordField = getByTestId('senha');


    expect(emailField).toBeDefined();
    expect(passwordField).toBeDefined();
  });
});