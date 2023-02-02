import { type } from "os";
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { DarkIcon, GoogleLogo } from "../components/icons";

export default function Authentication() {

    type ModeType = 'login' | "externAuth"

    const [mode, setMode] = useState<ModeType>('externAuth')
    const [email, setEmail] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    return (
        <div className={`
            flex flex-col h-screen 
            justify-center items-center
        `}>
            <div className={`
                w-80
            `}>
                <h1 className={
                    `
                    text-2xl
                    font-semibold
                    text-center
                    mb-8
                    `
                }>Login</h1>
                <AuthInput
                    label="Email"
                    value={email}
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
                }>
                    Sign in
                </button>

                <hr className={`my-6 border-gray-300 w-full`} />

                <button className={
                    `
                    flex flex-row
                    justify-center
                    items-center
                    w-full
                    text-white
                    font-semibold
                    mt-6
                    h-11
                    rounded-md
                    bg-red-600
                    hover:bg-red-500                   
                    `
                }>
                   {GoogleLogo} Sign in with Google
                </button>
            </div>


        </div>
    )
}