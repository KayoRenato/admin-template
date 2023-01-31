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
        <div>
            <Topbar title={props.title} subtitle={props.subtitle} />
            <Sidebar />
            <Content>
                {props.children}
            </Content>
        </div>
    );
}