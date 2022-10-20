// @ts-nocheck
import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
function App({ Component, pageProps }:{Component:any,pageProps:any}) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url:any) => {
            window.gtag("config", process.env.GOOGLE_ANALYTICS, {
                page_path: url,
            });
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return <Component {...pageProps} />

}

export default App;