import useAppData from "../../data/hook/useAppData"
import useAuthData from "../../data/hook/useAuthData"
import { AdjustIcon, DashboardIcon, LogoutIcon, NotificationIcon } from "../icons"
import AvatarUser from "./AvatarUser"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

interface SidebarProps {
    children?: any
}

export default function Sidebar(props: SidebarProps) {

    const { logout } = useAuthData()

    return (
        <nav className={
            `
            flex flex-col
            bg-slate-400 
            text-black

            dark:bg-slate-900  
            dark:text-gray-300


            `
        }>
            <div className={
                `
                flex flex-col justify-center items-center
                h-16 w-16 m-4
                p-2
                bg-gradient-to-bl from-purple-500 via-orange-300  to-yellow-500 rounded-full
                `
            }>
                <Logo />
            </div>
            <ul className={
                `
                flex-grow
                `
            }>
                <MenuItem url="/" text="Dashboard" icon={DashboardIcon} />
                <MenuItem url="/notifications" text="Notifications" icon={NotificationIcon} />
                <MenuItem url="/configurations" text="Configurations" icon={AdjustIcon} />
            </ul>

            <ul className={
                `
                 flex-end
                `}
            >
                <AvatarUser sideBar
                    className={`
                    sm:hidden
                    rounded-none`} />

                <MenuItem onClick={logout} text="Logout" icon={LogoutIcon}
                    className={
                        `
                        text-red-700
                        hover:bg-red-500
                        hover:text-white
                          hover:w-full
                          hover:mx-0
                          hover:p-0`} />
            </ul>
        </nav >
    )
}