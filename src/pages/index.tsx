import { GetServerSideProps, NextPage } from 'next';
import { IProductData } from '@/models';
import Home from '../components/screens/home/Home'

const HomePage: NextPage<IProductData> = ({products}) => {
  console.log(products);
  return (
      <Home products = {products}/>
  )
}

export const getServerSideProps: GetServerSideProps<IProductData> = async() => {
  // Fetch data from external API
  const res = await fetch('https://fakestoreapi.com/products?limit=10');
  const products = await res.json();
  // Pass data to the page via props
  return  {props: { products }} ;
}

export default HomePage;

