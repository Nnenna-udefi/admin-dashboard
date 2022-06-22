import React from 'react'
// import Dashboard from '../../pages/dashboard'
// import Axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar from '../../pages/Navbar'
import Sidebar from '../../pages/sidebar'
// import { useParams } from 'react-router-dom'

const Client = () => {

  const [clients, setClients] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [error, setError] = useState(null)

  useEffect(() => {

const fetchData = async ()=> {
  try {
    const res = await fetch('https://fakerapi.it/api/v1/companies?_quantity=10');
  const {data, code} = await res.json();
  if (code !== 200){
    throw Error("Something went wrong");
  }

  setIsLoading(false);
  setClients(data);
}
catch(error){
  setIsLoading(false);
  setError(error.message);
}
};
fetchData();
  }, []);


  console.log(clients)
  
  
  
  return (
    <div>
<Sidebar />
    < div className='main'>
   <Navbar />
      <div>

        <h2>Our Clients</h2>
    <table>
          <thead>
          <tr>
            
                  <th>NAME</th>
                  <th>VAT</th>
                  <th>EMAIL</th>
                  <th>PHONE NUMBER</th>
                  
              </tr>
          </thead>
          

          <tbody>

          {isLoading &&
            Array.from({length: 10}).map((item, index) =>(
              <tr key ={index}>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
                <td>Loading...</td>
              </tr>
            ))}
            
            {
               clients.map(({name, vat, email, phone, id}) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{vat}</td>
              <td>{email}</td>
              <td>{phone}</td>
            </tr>
               ))}
            
            
            
          
              {/* {
clients ? clients?.map((clients, idx) => (
            <tr key={idx}>
                <td>{clients[0].id}</td>
                <td>{clients[0].firstname}</td>
                <td>{clients[0].lastname}</td>
              <td>{clients[0].email}</td>
              <td>{clients[0].phone}</td>
               </tr>
         ) ) : null
        }

            
            {
clients ? clients?.map((clients, idx) => (
            <tr key={idx}>
            <td>{clients[1].id}</td>
                <td>{clients[1].firstname}</td>
                <td>{clients[1].lastname}</td>
              <td>{clients[1].email}</td>
              <td>{clients[1].phone}</td>
               </tr>
         ) ) : null
        }

            
            {
clients ? clients?.map((clients, idx) => (
            <tr key={idx}>
            <td>{clients[2].id}</td>
                <td>{clients[2].firstname}</td>
                <td>{clients[2].lastname}</td>
              <td>{clients[2].email}</td>
              <td>{clients[2].phone}</td>
               </tr>
         ) ) : null
        }

            {
clients ? clients?.map((clients, idx) => (
            <tr key={idx}>
            <td>{clients[3].id}</td>
                <td>{clients[3].firstname}</td>
                <td>{clients[3].lastname}</td>
              <td>{clients[3].email}</td>
              <td>{clients[3].phone}</td>
               </tr>
         ) ) : null
        }

            {
clients ? clients?.map((clients, idx) => (
            <tr key={idx}>
            <td>{clients[4].id}</td>
                <td>{clients[4].firstname}</td>
                <td>{clients[4].lastname}</td>
              <td>{clients[4].email}</td>
              <td>{clients[4].phone}</td>
               </tr>
         ) ) : null
        }

            {
clients ? clients?.map((clients, idx) => (
            <tr key={idx}>
            <td>{clients[5].id}</td>
                <td>{clients[5].firstname}</td>
                <td>{clients[5].lastname}</td>
              <td>{clients[5].email}</td>
              <td>{clients[5].phone}</td>
               </tr>
         ) ) : null
        }

            {
clients ? clients?.map((clients, idx) => (
            <tr key={idx}>
            <td>{clients[6].id}</td>
                <td>{clients[6].firstname}</td>
                <td>{clients[6].lastname}</td>
              <td>{clients[6].email}</td>
              <td>{clients[6].phone}</td>
               </tr>
         ) ) : null
        }

            {
clients ? clients?.map((clients, idx) => (
            <tr key={idx}>
            <td>{clients[7].id}</td>
                <td>{clients[7].firstname}</td>
                <td>{clients[7].lastname}</td>
              <td>{clients[7].email}</td>
              <td>{clients[7].phone}</td>
               </tr>
         ) ) : null
        }

            {
clients ? clients?.map((clients, idx) => (
            <tr key={idx}>
            <td>{clients[8].id}</td>
                <td>{clients[8].firstname}</td>
                <td>{clients[8].lastname}</td>
              <td>{clients[8].email}</td>
              <td>{clients[8].phone}</td>
               </tr>
         ) ) : null
        }

            {
clients ? clients?.map((clients, idx) => (
            <tr key={idx}>
            <td>{clients[9].id}</td>
                <td>{clients[9].firstname}</td>
                <td>{clients[9].lastname}</td>
              <td>{clients[9].email}</td>
              <td>{clients[9].phone}</td>
               </tr>
         ) ) : null
        } */}
         

          </tbody>
       </table>
    </div>
</div>

    </div>
  )
}

export default Client
