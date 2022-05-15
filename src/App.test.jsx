import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import userEvent from '@testing-library/user-event';
import { UserProvider } from './context/UserContext';

describe('<App/>', () => {
  it('renders list of entries and lets you add new entry', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );
    // const dashLink = await screen.getByRole('Link', { name: /view entries/i });
    // userEvent.click(dashLink);

    // const emailIn = screen.getByRole('textbox');
    // userEvent.type(emailIn, 'email');

    // const password = screen.getByPlaceholderText(/password/i);
    // userEvent.type(password);

    const signInButton = screen.getByRole('button', { name: /sign in/i });
    userEvent.click(signInButton);

    // const logoutB = screen.findByRole('button', { name: /logout/i });
    // userEvent.save(logoutB);
  });
});
