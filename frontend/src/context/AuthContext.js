import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      return state;
  }
}

export const AuthContextProvider = ({ children }) => {

  const storedUser=JSON.parse(localStorage.getItem('user'));
  const initialState=storedUser?{user:storedUser}:{user:null}

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if(!storedUser){
      localStorage.setItem('user',JSON.stringify(state.user));
    }
  }, [state.user])

  console.log('AuthContext state:', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}