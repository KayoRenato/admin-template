import { DarkIcon } from "../icons"
import Title from "./Title"

interface TopbarProps {
    title: string
    subtitle: string
}

export default function Topbar(props: TopbarProps) {
    return (
        <header className={`
        flex flex-row justify-between 
        `}>
            <Title title={props.title} subtitle={props.subtitle} />
        </header>
    )
}