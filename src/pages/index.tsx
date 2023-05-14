import { IProduct } from '@/models';
import Home from '../components/screens/home/Home'

export default function HomePage(props: IProduct) {
  return (
    <>
      <Home products = {props}/>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://fakestoreapi.com/products?limit=10');
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

