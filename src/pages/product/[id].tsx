import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { IProductSingle } from '@/models';
import ProductDetail from '@/components/screens/product-detail/product-detail';
import { ParsedUrlQuery } from 'querystring';

const ProductPage: NextPage<IProductSingle> = ({product}) => {
  return (
      <ProductDetail product = {product}/>
  )
}

interface IParams extends ParsedUrlQuery {
    id: string;
}

export const getStaticPaths: GetStaticPaths<IParams> = async() => {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    return {
      paths: products.map(product => ({
        params: {
            id: product.id.toString(),
        }
      })),
      fallback: 'blocking',
    };
  }
   
  // `getStaticPaths` requires using `getStaticProps`
  export const getStaticProps: GetStaticProps<IProductSingle> = async({params}) => {
    const res = await fetch(`https://fakestoreapi.com/products/${params}`);
    const product = await res.json();
    return {props: { product }};
  }

  export default ProductPage;