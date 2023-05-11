import { FC } from "react"
import Image from 'next/image'
import styles from './Home.module.scss'
import Layout from "@/components/layout/Layout"
import Cards from "@/components/cards/Cards"

const Home: FC = (props) => {

  console.log(`Hello : ${props}`);

  return (
      <Layout 
      title='Home'
      description='We love cars'
      >
        <Cards {...props}/>
      </Layout>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://api.api-ninjas.com/v1/cars?limit=10&make=audi&year=2022');
  const data = await res.json();
 console.log(data);
  // Pass data to the page via props
  return { props: { data } };
}

export default Home;