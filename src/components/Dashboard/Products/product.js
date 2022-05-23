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
    const res = await fetch('https://fakerapi.it/api/v1/products?_quantity=2');
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

    {isLoading &&
            Array.from({length: 10}).map((item, index) =>(
              <tr key ={index}>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
              </tr>
            ))}
{/* 
            {
               products.map(({firstname, lastname, email, phone, id}) => (
            <tr key={id}>
                <td>{firstname}</td>
                <td>{lastname}</td>
              <td>{email}</td>
              <td>{phone}</td>
            </tr>
               ))}
             */}


    {/* <div className='card-box'>
    {
products ? products?.map((products, idx) => (
            
    <div className='cards' key={idx}>
        <img src={products[0]} alt=''/>
        <p>{products[0].name}</p>
        <p>{products[0].description}</p>
        <p>{products[0].netprice}</p>
        <p>{products[0].taxes}</p>
        <p>{products[0].price}</p>
        <p>{products[0].categories}</p>
        <p>{products[0].tags}</p>
      </div>
      ) ) : null
          }
{
products ? products?.map((products, idx) => (
            
    <div className='cards' key={idx}>
        <img src={products[1]} alt=''/>
        <p>{products[1].name}</p>
        <p>{products[1].description}</p>
        <p>{products[1].netprice}</p>
        <p>{products[1].taxes}</p>
        <p>{products[1].price}</p>
        <p>{products[1].categories}</p>
        <p>{products[1].tags}</p>
      </div>
       ) ) : null
      }

{
  products ? products?.map((products, idx) => (
              
      <div className='cards' key={idx}>
        <img src={products[2]} alt=''/>
        <p>{products[2].name}</p>
        <p>{products[2].description}</p>
        <p>{products[2].netprice}</p>
        <p>{products[2].taxes}</p>
        <p>{products[2].price}</p>
        <p>{products[2].categories}</p>
        <p>{products[2].tags}</p>
      </div>
      ) ) : null
    }
    </div>
    

    <div className='card-box'>

    {
products ? products?.map((products, idx) => (
            
    <div className='cards' key={idx}>
        <img src={products[3]} alt=''/>
        <p>{products[3].name}</p>
        <p>{products[3].description}</p>
        <p>{products[3].netprice}</p>
        <p>{products[3].taxes}</p>
        <p>{products[3].price}</p>
        <p>{products[3].categories}</p>
        <p>{products[3].tags}</p>
      </div>
       ) ) : null
      }

      {
products ? products?.map((products, idx) => (
            
    <div className='cards' key={idx}>
        <img src={products[4]} alt=''/>
        <p>{products[4].name}</p>
        <p>{products[4].description}</p>
        <p>{products[4].netprice}</p>
        <p>{products[4].taxes}</p>
        <p>{products[4].price}</p>
        <p>{products[4].categories}</p>
        <p>{products[4].tags}</p>
      </div>
       ) ) : null
      } */}



      {/* Compare this one below with the one up to see the difference.
      And you don't have to multiply it, just need one. If you want to increase 
      how many it is, then you increase the number at the end of the API link.
      I also included the names of the API data you feetched like showing that
      this is Name, Price or Taxes. */}

      {
products ? products?.map((products, idx) => (
            
    <div className='cards' key={idx}>
        <img src={products.image} alt=''/>
        <p>Name: <span>{products.name}</span></p>
        <p>Description: <span>{products.description}</span></p>
        <p>Net-Price: <span>{products.netprice}</span></p>
        <p>Taxes: <span>{products.taxes}</span></p>
        <p>Price: <span>{products.price}</span></p>
        <p>categorie: <span>{products.categories}</span></p>
        <p>Tags: <span>{products.tags}</span></p>
      </div>
       ) ) : null
      }
    </div>

    </div>
  )
}

export default Product;