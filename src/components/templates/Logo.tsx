export default function Logo(){
    return (
        <div className={
            `
            h-12 w-12
            bg-gradient-to-tr from-gray-200 via-slate-400 to-slate-600
            dark:bg-gradient-to-bl dark:from-slate-500 dark:via-slate-700 dark:to-gray-900 rounded-full
            shadow-lg
            `
        }/>

    )
}