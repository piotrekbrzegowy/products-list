import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './core/store';
import App from './core/App/App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
