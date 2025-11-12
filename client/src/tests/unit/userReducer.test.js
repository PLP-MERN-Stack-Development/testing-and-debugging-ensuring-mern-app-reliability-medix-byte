import { userReducer, initialState } from '../../store/userSlice';

test('login flow', () => {
  const s1 = userReducer(initialState, { type: 'user/loginStart' });
  expect(s1.loading).toBe(true);
  const s2 = userReducer(s1, { type: 'user/loginSuccess', payload: { name: 'David' }});
  expect(s2.loading).toBe(false);
  expect(s2.user.name).toBe('David');
});
