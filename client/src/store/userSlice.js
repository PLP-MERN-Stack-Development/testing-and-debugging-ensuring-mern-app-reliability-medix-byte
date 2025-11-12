export const initialState = { user: null, loading: false };

export function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'user/loginStart': return { ...state, loading: true };
    case 'user/loginSuccess': return { ...state, loading: false, user: action.payload };
    case 'user/logOut': return initialState;
    default: return state;
  }
}
