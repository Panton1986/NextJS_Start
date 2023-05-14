import { FC } from "react"
import Image from 'next/image'
import styles from './Home.module.scss'
import Layout from "@/components/layout/Layout"
import Cards from "@/components/cards/Cards"
import { IProduct } from "@/models"

interface ProductProps {
  products: IProduct
}

function Home({products}: ProductProps) {

    const productsData = Object.entries(products);

    return (
      <Layout 
      title='Home'
      description='We love cars'
      >
          {productsData[0][1].map(product => {
              <Cards key={product.id} product = {...product}/>
          })}
      </Layout>
  )
}

export default Home;