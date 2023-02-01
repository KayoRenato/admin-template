import Layout from "../components/templates/Layout";
import useAppData from "../data/hook/useAppData";

export default function Home() {
    const ctx = useAppData()
    return (
        <Layout title='Notifications'
            subtitle="Manage your notifications"
        >
            <p>{ctx.name}</p>

            {/* <p>Content About Notifications</p> */}
        </Layout>
    )
}
