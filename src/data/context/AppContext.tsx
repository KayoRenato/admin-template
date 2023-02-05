import { type } from "os";
import { createContext, useEffect, useState } from "react";

interface AppContextProps {
    theme?: string
    changeTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: any) {
    const [theme, setTheme] = useState('')

    function changeTheme() {
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', theme)
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        setTheme(savedTheme)
    }, [])

    return (
        <AppContext.Provider value={
            {
                theme,
                changeTheme
            }
        }>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext

