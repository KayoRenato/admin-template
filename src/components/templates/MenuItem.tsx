import Link from "next/link"

interface MenuItemProps {
    url?: string
    text: string
    icon: any
    onClick?: (event: any) => void
    className?: string
}

export default function MenuItem(props: MenuItemProps) {

    function renderLink() {
        return (
            <a className={`
            flex flex-col justify-center items-center
            h-16 w-16 m-4 text-gray-600
            ${props.className}
            `}>
                {props.icon}
                <span className={
                    `
                    text-xs font-normal 
                `
                }>
                    {props.text}
                </span>
            </a>
        )
    }

    return (
        <li onClick={props.onClick} className={` hover:bg-gray-100 hover:text-gray-800 cursor-pointer`}>
            {props.url ? (
                <Link href={props.url} legacyBehavior>
                    {renderLink()}
                </Link>
            ) : (
                renderLink()
            )}

        </li>
    )
}