import React, { useState, createContext } from 'react'


export const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [token, setToken] = useState("")
    const [emailToken, setEmailToken] = useState("")
    const [user, setUser] = useState([])
    const [post, setPosts] = useState([])


    return(
        <GlobalContext.Provider value={{
            loggedIn,
            token,
            user,
            post,
            emailToken,

            setLoggedIn,
            setToken,
            setEmailToken,
            setUser,
            setPosts
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalProvider