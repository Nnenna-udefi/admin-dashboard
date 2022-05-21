import React from 'react'
// import Dashboard from '../../pages/dashboard'
// import Axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar from '../../pages/Navbar'
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
//   const [clients, setClients] = useState([])
// const [error, setError] = use state(null)
// const fetchData = async ()=> {
//   try {
//     const data = await fetch('https://fakerapi.it/api/v1/persons?_quantity=10')
//   const response = await response.json(data)
//    setClients(response)
//   } catch (error) {
//     setError(error.message)
//   }
//   }, [clients])
//   console.log(clients)


// Lawson Godgive own starts here

// i dont know how to use the erro method for Network Information, so i used the plain method

  const [clients, setClients] = useState([])

    useEffect(() => {
      fetch('https://fakerapi.it/api/v1/companies?_quantity=5')
      .then(response => response.json())
      .then(data => setClients(data.data))
    },[])

    console.log(clients)

  return (
    <div>
{/* <Dashboard /> */}
    < div className='main'>
   <Navbar />
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
            
          
              {/* {
clients ? clients?.map((clients, idx) => (
            <tr key={idx}>
                <td>{clients[0].id}</td>
                <td>{clients[0].contact.firstname}</td>
                <td>{clients[0].contact.lastname}</td>
              <td>{clients[0].email}</td>
              <td>{clients[0].phone}</td>
               </tr>
         ) ) : null
        }

            
            {
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
        } */}



        {/* I commented out the above tables and datas, you just need 1 then if you want 
        to multiple the clients you have to increase the number at the end of your API link.

        Also you tried getting the API information in a wrong format
        check below and compare with your own above. i removed the indexing numbers you attached to it*/}

            {
clients ? clients?.map((clients, idx) => (
            <tr key={idx}>
            <td>{clients.id}</td>
                <td>{clients.contact.firstname}</td>
                <td>{clients.contact.lastname}</td>
              <td>{clients.email}</td>
              <td>{clients.phone}</td>
               </tr>
         ) ) : null
        }
         

          </tbody>
       </table>
    </div>
</div>

    </div>
  )
}

export default Client;
