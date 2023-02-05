import { type } from "os";
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { ErrorIcon, GoogleLogo } from "../components/icons";
import useAuthData from "../data/hook/useAuthData";

export default function Authentication() {

    const { login, createAcc, loginGoogle } = useAuthData()

    type ModeType = 'login' | "createAccount";

    const [mode, setMode] = useState<ModeType>('createAccount')
    const [error, setError] = useState('')
    const [emailInput, setEmail] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    function renderError(msgError: string) {
        return (
            <div className={`
            flex flex-row justify-start items-center
            text-red-500 text-sm p-2
            `}>
                {ErrorIcon}<span className="ml-2">{msgError}</span>
            </div>
        )
    }

    function alertError(msg: string, timeMsg: number = 5000) {
        setError(msg)
        setTimeout(() => setError(''), timeMsg)
    }

    async function submit() {
        try {
            if (mode === "login") {
                await login(emailInput, passwordInput)
            } else {
                await createAcc(emailInput, passwordInput)
            }
        } catch (error) {
            alertError(error?.message ?? 'Occurred error during Login')
        }

    }

    return (
        <div className={`
            flex flex-row h-screen items-center justify-center
    
        `}>
            <div className={
                `
                hidden md:block md:w-1/2
                lg:w-2/3

                `

            }>
                <picture>
                    <iframe className={`h-screen w-full object-cover bg-slate-300`} src="https://embed.lottiefiles.com/animation/78078"></iframe>
                </picture>

            </div>
            <div className={
                `
                flex justify-center items-center
                lg:w-1/3
                md:w-1/2
                m-10

                `
            }>
                <div className="w-80 md:w-96">
                    <h1 className={
                        `
                    text-2xl
                    font-semibold
                    text-left
                    mb-8
                    `
                    }>{mode === 'login' ? 'Enter your account' : 'Register now'}</h1>
                    {error ? renderError(error) : false}
                    <form action="#">

                        <AuthInput
                            label="Email"
                            value={emailInput}
                            onChange={setEmail}
                            type="email"
                            placeholder="Insert your email"
                            isRequired
                        />
                        <AuthInput
                            label="Password"
                            value={passwordInput}
                            onChange={setPasswordInput}
                            type="password"
                            placeholder="Enter your password"
                            isRequired
                        />
                        <button className={
                            `
                        w-full
                        text-white
                        font-semibold
                        mt-6
                        h-11
                        rounded-md
                        bg-blue-600
                        hover:bg-blue-500
                        `
                        } onClick={submit}>{mode === 'login' ? 'Sign in' : 'Sign up'}</button>
                    </form>

                    <hr className={`my-6 border-gray-300 w-full`} />

                    <button onClick={loginGoogle} className={
                        `
                    flex flex-row
                    justify-center
                    items-center
                    w-full
                    text-white
                    font-semibold
                    mt-6
                    mb-4
                    h-11
                    rounded-md
                    bg-red-600
                    hover:bg-red-500                   
                    `
                    }>
                        {GoogleLogo} Sign in with Google
                    </button>
                    {mode === 'login' ? (
                        // eslint-disable-next-line react/no-unescaped-entities
                        <p> Didn't you still register?
                            <a onClick={() => { setMode("createAccount"), setError('') }} className={
                                `
                                text-blue-500 hover:text-blue-700 cursor-pointer
                                `
                            }> Sign up for free today </a>
                        </p>

                    ) : (

                        // eslint-disable-next-line react/no-unescaped-entities
                        <p> Use your email to
                            <a onClick={() => { setMode("login"), setError('') }} className={
                                `
                                text-blue-500 hover:text-blue-700  cursor-pointer
                                `
                            }> Sign in</a>
                        </p>
                    )}
                </div>
            </div>


        </div>
    )
}