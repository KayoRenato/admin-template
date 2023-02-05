import Link from "next/link";
import useAuthData from "../../data/hook/useAuthData";
import { userIcon } from "../icons";

interface AvatarUserProps {
    sideBar?: boolean
    className?: string
}


export default function AvatarUser(props: AvatarUserProps) {
    const { user } = useAuthData()

    function renderName() {
        return (
            <p className="
            mx-2
            hidden md:flex md:text-base
            hidden max-md:font-normal
            text-gray-900
            dark:text-gray-200
        ">
                {user?.name ?? 'User Name'}
            </p>
        )
    }

    return (
        <Link
            href='/profile'
            className=
            {`flex flex-row items-center justify-center
            px-4 py-2
            md: px-2
            hover:bg-slate-400 dark:hover:bg-slate-800 
            rounded-full
            ${props.className}
            `}
        >
            <picture>
                <img
                    className="
                        h-10 w-10 rounded-full 
                        cursor-pointer
                        "
                    src={user?.avatarUrl ?? '/img/user.png'}
                    alt='user avatar' />
            </picture>
            {props.sideBar ? false : renderName()}

        </Link>
    );

}