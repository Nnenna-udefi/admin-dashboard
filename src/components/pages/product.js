import React from 'react'
import {useState, useEffect} from 'react'

const Product = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch('https://fakerapi.it/api/v1/products?_quantity=1')
    
      .then(response =>response.json)
      .then(data => setProducts(data.data))
      
    }, [])
    
console.log(products)

  return (
    <div>
        <p>{products.id}</p>
        <p>{products.name}</p>
        <p>{products.description}</p>

    </div>
  )
}

export default Product