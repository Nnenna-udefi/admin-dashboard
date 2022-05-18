import React from 'react'
import Dashboard from '../../pages/dashboard'
import {useState, useEffect} from 'react'

const Member = () => {

  const [member, setMember] = useState([])

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/persons?_quantity=10')
  .then(response => response.json())
  .then(data => setMember(data.data))


  
    
  }, [])

  console.log(member)
  
  
  return (
    <div className='main'>
        <Dashboard />
   
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
                <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>{member.gender}</td>
             
            </tr>
         

            }
            
          </tbody>
       </table>
    </div>
  )
}

export default Member