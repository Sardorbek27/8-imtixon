
import React, { useEffect, useState } from 'react';
import Banner from '../components/banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Main from '../components/main/Main';

const Home = () => {
  const data = useLoaderData();
  console.log(data.data1);
  console.log(data.data2);

  const [products, setProducts] = useState([]);
  const [perfumeryData, setPerfumeryData] = useState([]);

  useEffect(() => {
    if (data && data.data1 && data.data2) {
      setProducts(data.data1);
      setPerfumeryData(data.data2);
    }
  }, [data]);


  return (
    <>
      <Banner />
      <Main products={products} perfumeryData={perfumeryData}/>
    </>
  );
};

export default Home;