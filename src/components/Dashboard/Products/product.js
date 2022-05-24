import React from 'react'
import {useState, useEffect} from 'react';
// import Dashboard from '../../pages/dashboard';
import Navbar from '../../pages/Navbar';

const Product = () => {



  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [error, setError] = useState(null)

  useEffect(() => {

const fetchData = async ()=> {
  try {
    const res = await fetch('https://fakerapi.it/api/v1/products?_quantity=3');
  const {data, code} = await res.json();
  if (code !== 200){
    throw Error("Something went wrong");
  }

  setIsLoading(false);
  setProducts(data);
}
catch(error){
  setIsLoading(false);
  setError(error.message);
}
};
fetchData();
  }, []);



  console.log(products)
  

  return (
<div>

    < div className='main'>
   <Navbar />

    <h1 className='product-title'>Our Products</h1>

            


    <div className='card-box'>

    {isLoading &&
            Array.from({length: 10}).map((item, index) =>(
              <div className='cards' key={index}>
                
              
                <img alt='Loading..'></img>
              <h3>Loading...</h3>
                <p>Loading...</p>
                <p>Loading...</p>
              </div>
            ))}

{
               products.map(({image, name, description, taxes, price, id, categories}) => (
                <div className='cards' key={id}>
                  <img src ={image} alt="" />
                <h3 className='card-title'>{name}</h3>
                <p><span>Description: </span>{description}</p>
              <p><span>Taxes: </span>{taxes}</p>
              <p><span>Price: </span>{price}</p>
              <p><span>Categories: </span>{categories}</p>
              
            </div>
               ))}
   

    </div>

    </div>
   </div>
  )
}

export default Product
