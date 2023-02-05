import Image from "next/image";
import useAuthData from "../../data/hook/useAuthData";
import router from "next/router";
import Head from "next/head";

export default function CheckAuth(props) {

    const { user, loading } = useAuthData()

    function renderContent() {
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-templ-auth")){
                                    window.location.href = "/authentication"
                                }
                            `
                        }} />
                </Head>
                    {props.children}
            </>
        );
    }

    function renderLoading() {
        return (
            <div className={`
                flex justify-center items-center h-screen w-screen
            `}>
                <picture>
                    <img
                        className="
                        h-40 w-40
                        "
                        src={'/img/loading.gif'}
                        alt='loading information' />
                </picture>
            </div>
        );
    }

    if (!loading && user?.email) {
        return renderContent()
    } else if (loading) {
        return renderLoading()
    } else {
        router.push('/authentication')
        return null
    }

}