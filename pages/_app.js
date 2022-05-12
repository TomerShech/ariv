import "../styles/globals.css";
import Layout from "../components/layout";

function Ariv({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default Ariv;
