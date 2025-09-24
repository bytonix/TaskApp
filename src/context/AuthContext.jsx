import {  createContext, useState } from "react"

export const UserContext = createContext();

const AuthContext = ({children}) => {

    const [user, setUser] = useState(()=>{
        return JSON.parse(localStorage.getItem('user') || {name :"", loggedIn :false})
    })


    
    return(<>
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
    
    </>)
}

export default AuthContext