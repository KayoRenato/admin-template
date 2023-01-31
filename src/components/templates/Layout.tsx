import Content from "./Content";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}


export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex w-screen h-screen`}>
            <Sidebar>
                <li>Menu</li>
                <li>Create</li>
                <li>Report</li>
            </Sidebar>
            <div className={`
                flex-col
                bg-gray-200
                dark:bg-gray-700
                w-full
                p-6
                `}>
                <Topbar title={props.title} subtitle={props.subtitle} />
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    );
}