import React,{useState, useEffect, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import firebase from 'firebase/app'
import {auth} from '../FirebaseConfig'
const AuthProvider: React.FC  = ({children}) => {
    const [user, setUser] = useState<firebase.User | null | 'Loading'> ('Loading')
    useEffect(() => {
        const authListener = auth.onAuthStateChanged((fbUser)=>{
            setUser(fbUser)
        })
        return authListener
    }, [])

    return (
        <AuthContext.Provider value = {user}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
