import { AdjustIcon, DashboardIcon, LogoutIcon, NotificationIcon } from "../icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

interface SidebarProps {
    children?: any
}

export default function Sidebar(props: SidebarProps) {
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

            <ul>
                <MenuItem onClick={() => {
                    confirm('Do you wish logout?') ? alert('See you later!') : false
                }} text="Logout" icon={LogoutIcon}
                    className={
                        `
                        text-red-700
                        hover:bg-red-500
                        hover:text-white
                          hover:w-full
                          hover:mx-0
                          hover:p-0`} />
            </ul>
        </nav>
    )
}