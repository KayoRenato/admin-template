interface SidebarProps {
    children?: any
}

export default function Sidebar(props: SidebarProps) {
    return (
        <nav>
            <ul>
                {props.children}
            </ul>
        </nav>
    )
}