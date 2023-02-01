import { type } from "os";
import { createContext, useState } from "react";

type Theme = 'dark' | ''
interface AppContextProps {
    theme?: Theme
    changeTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: any) {

    function changeTheme() {
        setTheme(theme === '' ? 'dark' : '')
    }

    let [theme, setTheme] = useState<Theme>('')

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

