import { createContext } from "react";

const AppContext = createContext({
    name: null
})

export function AppProvider(props: any) {
    return (
        <AppContext.Provider value={
            {
                name: 'Test Context API'
            }
        }>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext

