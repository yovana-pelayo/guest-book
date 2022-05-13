import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import userEvent from '@testing-library/user-event';
import { UserProvider } from './context/UserContext';

const server = setupServer(
  rest.post(
    'https://ezwbsacoojmonmiqffad.supabase.co/auth/v1/token',
    (req, res, ctx) =>
      res(
        ctx.json({
          access_token: 'MOCK_ACCESS_TOKEN',
          token_type: 'bearer',
          expires_in: 3600,
          refresh_token: 'REFRESH_TOKEN',
          user: {
            id: '12345',
            aud: 'authenticated',
            role: 'authenticated',
            email: 'yovi@testing.com',
            email_confirmed_at: '2022-05-10T07:18:56.299023Z',
            phone: '',
            confirmed_at: '2022-05-10T07:18:56.299023Z',
            last_sign_in_at: '2022-05-10T07:53:42.830704792Z',
            app_metadata: {
              provider: 'email',
              providers: ['email'],
            },
            user_metadata: {},
            identities: [
              {
                id: '12345',
                user_id: '12345',
                identity_data: {
                  sub: '12345',
                },
                provider: 'email',
                last_sign_in_at: '2022-05-10T07:18:56.297198Z',
                created_at: '2022-05-10T07:18:56.297239Z',
                updated_at: '2022-05-10T07:18:56.297242Z',
              },
            ],
            created_at: '2022-05-10T07:18:56.290313Z',
            updated_at: '2022-05-10T07:53:42.831781Z',
          },
        })
      )
  )
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<App/>', () => {
  it('renders list of entries and lets you add new entry', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );
    const dashLink = screen.getByRole('link', { name: /view dashboard/i });
    userEvent.click(dashLink);

    const emailIn = screen.getByRole('textbox');
    userEvent.type(emailIn, 'test@yahoo.com');

    const passwordIn = screen.getByPlaceholderText(/password/i);
    userEvent.type(passwordIn, 'YOLO, password free');

    const signInButton = screen.getByRole('button', { name: /sign in/i });
    userEvent.click(signInButton);

    await screen.findByRole('heading', {
      name: /dashboard/i,
    });
  });
});
