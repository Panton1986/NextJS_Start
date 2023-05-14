const API_URL = 'https://fakestoreapi.com/products?limit=10';

export const CarService = {
  const res = await fetch(API_URL);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}