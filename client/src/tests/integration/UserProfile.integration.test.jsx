import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from '../../components/UserProfile';
import axios from 'axios';

jest.mock('axios');

test('loads and displays user', async () => {
  axios.get.mockResolvedValueOnce({ data: { name: 'David' }});
  render(<UserProfile id="1" />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText('David')).toBeInTheDocument());
});
