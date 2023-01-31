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
                <MenuItem url="/" text="Dashboard" icon={DashboardIcon} />
                <MenuItem url="/notifications" text="Notifications" icon={NotificationIcon} />
                <MenuItem url="/configurations" text="Configurations" icon={AdjustIcon} />
            </ul>

            <ul>
                <MenuItem onClick={() => {
                    confirm('Do you wish logout?') ? alert('See you later!') : false
                }} text="Logout" icon={LogoutIcon} />
            </ul>
        </nav>
    )
}