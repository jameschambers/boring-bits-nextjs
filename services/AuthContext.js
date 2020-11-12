import React, { useReducer, useContext, useEffect, createContext } from "react"

export const AuthStateContext = createContext({});

const initialState = {
  email: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setAuthDetails":
      return {
        email: action.payload.email,
      }
    case "removeAuthDetails":
      return {
        email: initialState.email,
      }
    default:
      throw new Error(`No action named ${action.type}!`)
  }
}

export const AuthProvider = ({ children }) => {
  let localState = null
  if (typeof localStorage !== "undefined" && localStorage.getItem("userInfo")) {
    localState = JSON.parse(localStorage.getItem("userInfo") || "")
  }
  const [state, dispatch] = useReducer(reducer, localState || initialState)

  if (typeof localStorage !== "undefined") {
    useEffect(() => {
      localStorage.setItem("userInfo", JSON.stringify(state))
    }, [state])
  }

  return (
    <AuthStateContext.Provider value={[state, dispatch]}>
      {children}
    </AuthStateContext.Provider>
  )
}

export const useAuth = () => useContext(AuthStateContext)
