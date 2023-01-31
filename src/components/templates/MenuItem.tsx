import Link from "next/link"

interface MenuItemProps {
    url?: string
    text: string
    icon: any
    onClick?: (event: any) => void
}

export default function MenuItem(props: MenuItemProps) {

    function renderLink() {
        return (
            <a className={`
            flex flex-col justify-center items-center
            h-16 w-16 m-4
            `}>
                {props.icon}
                <span className={
                    `
                    text-xs font-normal text-gray-600
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