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
            `
        }>
            <div className={
                `
                flex flex-col justify-center items-center
                h-16 w-16 m-4
                bg-gradient-to-bl from-fuchsia-500 via-transparent to-yellow-300
                `
            }>
                <Logo />
            </div>
            <ul className={
                `
                flex-grow
                `
            }>
                <MenuItem url="/" text="Dashboard" icon={DashboardIcon} className={`hover:text-orange-600`} />
                <MenuItem url="/notifications" text="Notifications" icon={NotificationIcon} className={`hover:text-orange-600`} />
                <MenuItem url="/configurations" text="Configurations" icon={AdjustIcon} className={`hover:text-orange-600`} />
            </ul>

            <ul>
                <MenuItem onClick={() => {
                    confirm('Do you wish logout?') ? alert('See you later!') : false
                }} text="Logout" icon={LogoutIcon}
                    className={
                        `
                        text-red-500
                        hover:bg-red-500
                        hover:text-white
                          hover:w-full
                          hover:mx-0
                          hover:p-0`} />
            </ul>
        </nav>
    )
}