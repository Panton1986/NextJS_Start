import { FC } from "react"
import Layout from "@/components/layout/Layout"
import Cards from "@/components/cards/Cards"
import { IProductSingle } from "@/models"

const ProductDetail: FC<IProductSingle> = ({product}) => {

    return (
      <Layout 
      title={product.title}
      description={product.description}
      >
        <Cards product={product}/>
      </Layout>
  )
}

export default ProductDetail;