import useAppData from "../../data/hook/useAppData";
import CheckAuth from "../auth/checkAuth";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}


export default function Layout(props: LayoutProps) {
    const { theme } = useAppData()

    return (
        <CheckAuth>
            <div className={` ${theme}
         flex w-screen h-screen
         `}>
                <Sidebar>
                    <li>Menu</li>
                    <li>Create</li>
                    <li>Report</li>
                </Sidebar>
                <div className={`
                flex-col
                w-full
                p-6
                bg-slate-300
                dark:bg-gray-700
                `}>
                    <Topbar title={props.title} subtitle={props.subtitle} />
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>
        </CheckAuth>
    );
}