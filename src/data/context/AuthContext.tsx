import { createContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import User from '../../model/User'
import route from 'next/router'
import Cookies from 'js-cookie'

interface AuthContextProps {
    user?: User
    loading?: boolean
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
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

function cookieManage(isLogged: boolean) {
    if (isLogged) {
        Cookies.set('admin-templ-auth', isLogged, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-templ-auth')
    }
}

export function AuthProvider(prop: any) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>()

    async function sessionConfig(userFirebase) {
        if (userFirebase?.email) {
            const user = await normalizeUser(userFirebase)
            setUser(user)
            cookieManage(true)
            setLoading(false)
            return user.email

        } else {
            setUser(null)
            cookieManage(false)
            setLoading(false)
            return false

        }
    }

    async function loginGoogle() {
        try {
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )

            sessionConfig(resp.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await sessionConfig(null)
        } finally {
            setLoading(false)
        }
    }

    // ! check user login in the pass 
    useEffect(() => {
        if (Cookies.get('admin-templ-auth')) {
            const cancel = firebase.auth().onIdTokenChanged(sessionConfig)
            return () => cancel()
        } else {
            setLoading(false)
        }
    }, [])


    return (
        <AuthContext.Provider value={{
            user,
            loading,
            loginGoogle,
            logout
        }}>
            {prop.children}
        </AuthContext.Provider>
    )
}


export default AuthContext