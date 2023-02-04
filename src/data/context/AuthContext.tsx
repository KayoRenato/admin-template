import { createContext, useState } from 'react'
import firebase from '../../firebase/config'
import User from '../../model/User'
import route from 'next/router'

interface AuthContextProps {
    user?: User
    loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({

})

async function normalizeUser(userFirebase: firebase.User): Promise<User> {
    const token = await userFirebase.getIdToken()
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0]?.providerId,
        avatarUrl: userFirebase.photoURL
    }
}

export function AuthProvider(prop: any) {
    const [user, setUser] = useState<User>()

    async function loginGoogle() {
        try {
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )

            if(resp.user?.email){
                const user = await normalizeUser(resp.user)
                setUser(user)
                route.push('/')
            }
            
            route.push('/authentication')

        } catch (error) {

        } finally {
            console.log('Clear user data ...')

        }
    }


    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle
        }}>
            {prop.children}
        </AuthContext.Provider>
    )
}


export default AuthContext