import { FC } from "react"
import Layout from "@/components/layout/Layout"
import Cards from "@/components/cards/Cards"
import { IProductData } from "@/models"
import styles from './Home.module.scss'

const Home: FC<IProductData> = ({products}) => {

    return (
      <Layout 
      title='Home'
      description='We love cars'
      >
        <div className={styles.home}>
          {products.length ? products.map(product => <Cards key={product.id} product={product}/>) : <span>Products not found</span> }
        </div>
      </Layout>
  )
}

export default Home;