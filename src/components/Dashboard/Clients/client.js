import React from 'react'
import Dashboard from '../../pages/dashboard'
// import Axios from 'axios'
import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

const Client = () => {
  // const url = 'https://fakerapi.it/api/v1/companies?_quantity=1'
  // const [clients, setClients] = useState(null)
  
  // useEffect (() =>{
  //   Axios.get(url)
  //   .then((response)=>{
  //     setClients(response.data)
  
  //   });

  // }, [url])
  
 
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/persons?_quantity=10')
  .then(res => res.json())
  .then(data => setClients(data.data))


  
    
  }, [])

  console.log(clients)

  
  return (
    <div className='main'>
      <Dashboard />
      <div>

        <h2>Our Clients</h2>
    <table>
          <thead>
          <tr>
            <th></th>
                  <th>FIRST NAME</th>
                  <th>LAST NAME</th>
                  <th>EMAIL</th>
                  <th>PHONE NUMBER</th>
                  
              </tr>
          </thead>
          

          <tbody>
            
          
              <tr>
                <td>{clients[0].id}</td>
                <td>{clients[0].firstname}</td>
                <td>{clients[0].lastname}</td>
              <td>{clients[0].email}</td>
              <td>{clients[0].phone}</td>
            </tr>

            
            <tr >
            <td>{clients[1].id}</td>
                <td>{clients[1].firstname}</td>
                <td>{clients[1].lastname}</td>
              <td>{clients[1].email}</td>
              <td>{clients[1].phone}</td>
            </tr>

            
            <tr >
            <td>{clients[2].id}</td>
                <td>{clients[2].firstname}</td>
                <td>{clients[2].lastname}</td>
              <td>{clients[2].email}</td>
              <td>{clients[2].phone}</td>
            </tr>

            <tr >
            <td>{clients[3].id}</td>
                <td>{clients[3].firstname}</td>
                <td>{clients[3].lastname}</td>
              <td>{clients[3].email}</td>
              <td>{clients[3].phone}</td>
            </tr>

            <tr >
            <td>{clients[4].id}</td>
                <td>{clients[4].firstname}</td>
                <td>{clients[4].lastname}</td>
              <td>{clients[4].email}</td>
              <td>{clients[4].phone}</td>
            </tr>

            <tr >
            <td>{clients[5].id}</td>
                <td>{clients[5].firstname}</td>
                <td>{clients[5].lastname}</td>
              <td>{clients[5].email}</td>
              <td>{clients[5].phone}</td>
            </tr>

            <tr >
            <td>{clients[6].id}</td>
                <td>{clients[6].firstname}</td>
                <td>{clients[6].lastname}</td>
              <td>{clients[6].email}</td>
              <td>{clients[6].phone}</td>
            </tr>

            <tr >
            <td>{clients[7].id}</td>
                <td>{clients[7].firstname}</td>
                <td>{clients[7].lastname}</td>
              <td>{clients[7].email}</td>
              <td>{clients[7].phone}</td>
            </tr>

            <tr >
            <td>{clients[8].id}</td>
                <td>{clients[8].firstname}</td>
                <td>{clients[8].lastname}</td>
              <td>{clients[8].email}</td>
              <td>{clients[8].phone}</td>
            </tr>

            <tr >
            <td>{clients[9].id}</td>
                <td>{clients[9].firstname}</td>
                <td>{clients[9].lastname}</td>
              <td>{clients[9].email}</td>
              <td>{clients[9].phone}</td>
            </tr>
         

          </tbody>
       </table>
    </div>


    </div>
  )
}

export default Client
