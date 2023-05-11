import { NextPage } from "next"; 
import Layout from '../components/layout/Layout'
import Image from "next/image";
import Head from "next/head";

const NotFound: NextPage = () => {
    return <Layout>
            <Head>
                <title>Not found</title>
            </Head>
            <div style={{textAlign: 'center'}}>
                <Image src="/404page.png" alt="404" width={450} height={350}/>
            </div>
        </Layout>
}

export default NotFound