import React, { useState, createContext } from 'react'


export const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [token, setToken] = useState("")
    const [Id, setId] = useState("")
    const [emailToken, setEmailToken] = useState("")
    const [user, setUser] = useState([])
    const [posts, setPosts] = useState([])


    return(
        <GlobalContext.Provider value={{
            loggedIn,
            token,
            user,
            posts,
            emailToken,
            Id,

            setLoggedIn,
            setToken,
            setEmailToken,
            setUser,
            setPosts,
            setId
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalProvider