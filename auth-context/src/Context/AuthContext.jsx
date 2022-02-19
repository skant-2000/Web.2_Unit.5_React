import React, {createContext, useState} from "react"

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [showSignin, setShowSignin] = useState(true)
    const [showLogin, setShowLogin] = useState(false)
    const [showSignout, setShowSignout] = useState(false)

    return (
        <AuthContext.Provider value={{showSignin, setShowSignin, showLogin, setShowLogin, showSignout, setShowSignout}}>
            {children}
        </AuthContext.Provider>
    )
}