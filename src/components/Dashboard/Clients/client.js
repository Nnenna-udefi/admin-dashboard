import React from 'react'
import Dashboard from '../../pages/dashboard'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Client = () => {
  // const url = 'https://fakerapi.it/api/v1/companies?_quantity=1'
  // const [clients, setClients] = useState(null)
  
  // useEffect (() =>{
  //   Axios.get(url)
  //   .then((response)=>{
  //     setClients(response.data)
  
  //   });

  // }, [url])
  
 const {id} = useParams()
  const [clients, setClients] = useState(null)

  let content = null

  useEffect(() => { 
    fetch('https://fakerapi.it/api/v1/companies?_quantity=1')
    .then(response => response.json)
    .then(data => setClients(data.data))
  
    
  }, [])
  console.log(clients)

  if(clients){
    content =  
    
    <div>
    <table>
          <thead>
              <tr>
                  <th>FULL NAME</th>
                  <th>EMAIL</th>
                  <th>PHONE NUMBER</th>
                  <th>GENDER</th>
              </tr>
          </thead>
          

          <tbody>
            {
          
              <tr >
                <td>{clients.name}</td>
              <td>{clients.email}</td>
              <td>{clients.phone}</td>
              <td>{clients.gender}</td>
             
            </tr>
         

            }
            
          </tbody>
       </table>
    </div>

  }
  
  return (
    <div className='main'>
      <Dashboard />
      {content}

    </div>
  )
}

export default Client
