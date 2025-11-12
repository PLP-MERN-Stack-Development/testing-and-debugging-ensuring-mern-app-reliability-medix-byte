import { renderHook } from '@testing-library/react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';

jest.mock('axios');

test('useFetch returns data', async () => {
  axios.get.mockResolvedValueOnce({ data: { hello: 'world'} });
  const { result, waitForNextUpdate } = renderHook(() => useFetch('/test'));
  expect(result.current.loading).toBe(true);
  await waitForNextUpdate();
  expect(result.current.loading).toBe(false);
  expect(result.current.data).toEqual({ hello: 'world' });
});
