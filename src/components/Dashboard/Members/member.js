import React from 'react'
import Dashboard from '../../pages/dashboard'
import {useState, useEffect} from 'react'

const Member = () => {

  const [member, setMember] = useState([])

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/persons?_quantity=10')
  .then(res => res.json())
  .then(data => setMember(data.data))


  
    
  }, [])

  console.log(member)
  
  
  return (
    <div className='main'>
        <Dashboard />

        <h2>Team Members</h2>
   
        <table>
          <thead>
              <tr>
                  <th>FIRST NAME</th>
                  <th>LAST NAME</th>
                  <th>EMAIL</th>
                  <th>PHONE NUMBER</th>
                  
              </tr>
          </thead>
          

          <tbody>
            
          
              <tr >
                <td>{member[0].firstname}</td>
                <td>{member[0].lastname}</td>
              <td>{member[0].email}</td>
              <td>{member[0].phone}</td>
            </tr>

            
            <tr >
                <td>{member[1].firstname}</td>
                <td>{member[1].lastname}</td>
              <td>{member[1].email}</td>
              <td>{member[1].phone}</td>
            </tr>

            
            <tr >
                <td>{member[2].firstname}</td>
                <td>{member[2].lastname}</td>
              <td>{member[2].email}</td>
              <td>{member[2].phone}</td>
            </tr>

            <tr >
                <td>{member[3].firstname}</td>
                <td>{member[3].lastname}</td>
              <td>{member[3].email}</td>
              <td>{member[3].phone}</td>
            </tr>

            <tr >
                <td>{member[4].firstname}</td>
                <td>{member[4].lastname}</td>
              <td>{member[4].email}</td>
              <td>{member[4].phone}</td>
            </tr>

            <tr >
                <td>{member[5].firstname}</td>
                <td>{member[5].lastname}</td>
              <td>{member[5].email}</td>
              <td>{member[5].phone}</td>
            </tr>

            <tr >
                <td>{member[6].firstname}</td>
                <td>{member[6].lastname}</td>
              <td>{member[6].email}</td>
              <td>{member[6].phone}</td>
            </tr>

            <tr >
                <td>{member[7].firstname}</td>
                <td>{member[7].lastname}</td>
              <td>{member[7].email}</td>
              <td>{member[7].phone}</td>
            </tr>

            <tr >
                <td>{member[8].firstname}</td>
                <td>{member[8].lastname}</td>
              <td>{member[8].email}</td>
              <td>{member[8].phone}</td>
            </tr>

            <tr >
                <td>{member[9].firstname}</td>
                <td>{member[9].lastname}</td>
              <td>{member[9].email}</td>
              <td>{member[9].phone}</td>
            </tr>
         

            
            
          </tbody>
       </table>
    </div>
  )
}

export default Member