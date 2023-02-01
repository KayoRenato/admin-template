import Link from "next/link";
import React from "react";
import useAppData from "../../data/hook/useAppData";
import { DarkIcon, LightIcon } from "../icons";

export default function Logo() {
    const { theme, changeTheme } = useAppData()

    function renderTheme() {
        return theme === 'dark' ? (
            LightIcon
        ) : (
            DarkIcon

        );
    }

    return (
        <button className={
            `
            h-12 w-12
            flex items-center justify-center
            bg-gradient-to-bl from-slate-500 via-slate-700 to-gray-900 rounded-full
            dark:bg-gradient-to-tr dark:from-gray-200 dark:via-slate-400 dark:to-slate-600
            shadow-lg

            dark:text-gray-900
            text-gray-200

            `
        } onClick={changeTheme}>

            {renderTheme()}

        </button>



    )
}