import React from 'react'
import {useState, useEffect} from 'react';
// import Dashboard from '../../pages/dashboard';
import Navbar from '../../pages/Navbar';

const Product = () => {
//     const [products, setProducts] = useState([])
// const [error, setError] = useState(null)
//     useEffect(() => {
      
//       const fetchData = async ()=> {
//   try {
//     const data = await fetch('https://fakerapi.it/api/v1/products?_quantity=1')
//   const response = await response.json(data)
//    setProducts(response)
    
//   } catch (error) {
//     setError(error.message)
//   }
      
//     }, [products])





// Lawson Godgives own starts from here

const [products, setProducts] = useState([])

    useEffect(() => {
      fetch('https://fakerapi.it/api/v1/products?_quantity=1')
      .then(response => response.json())
      .then(data => setProducts(data.data))
    },[])
    
console.log(products)

  return (
<div>
{/* <Dashboard /> */}
    < div className='main'>
   <Navbar />

    <h1 className='product-title'>Our Products</h1>


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



       {/* I commented out the above tables and datas, you just need 1 then if you want 
        to multiple the clients you have to increase the number at the end of your API link.

        Also you tried getting the API information in a wrong format
        check below and compare with your own above. i removed the indexing numbers you attached to it
        
        The API you used for product is wrong that is why it was not showing too.
        Then you can design or customize the contents of the API to your test now.
        */}

      {
products ? products?.map((products, idx) => (
            
    <div className='cards' key={idx}>
        <img src={products} alt=''/>
        <p>{products.name}</p>
        <p>{products.description}</p>
        <p>{products.netprice}</p>
        <p>{products.taxes}</p>
        <p>{products.price}</p>
        <p>{products.categories}</p>
        <p>{products.tags}</p>
      </div>
       ) ) : null
      }
    </div>
    </div>
  )
}

export default Product;
