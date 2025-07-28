import Layout from '../component/Layout'
import '../styles/globals.css'
import ReactGA from "react-ga4";

function MyApp({Component, pageProps}) {

    ReactGA.initialize('G-5YZVSJPJLT');

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>

    )
}

export default MyApp
