import React from 'react'
// import Dashboard from '../../pages/dashboard'
import {useState, useEffect} from 'react'
import Navbar from '../../pages/Navbar'

const Member = () => {

  const [member, setMember] = useState([])

  const [error, setError] = useState(null)

  useEffect(() => {

const fetchData = async ()=> {
  try {
    const data = await fetch('https://fakerapi.it/api/v1/persons?_quantity=10')
  const response = await response.json(data)
   setMember(response)
    
  } catch (error) {
    setError(error.message)
  }

}
fetchData()

    
  }, [member])



  console.log(member)
  
  
  return (
    <div>
    
    <div className='main'>
     <Navbar />   

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
            
            {
               member ? member?.map((member, idx) => (
            <tr key={idx}>
                <td>{member[0].firstname}</td>
                <td>{member[0].lastname}</td>
              <td>{member[0].email}</td>
              <td>{member[0].phone}</td>
            </tr>
    ) ) : null
  }
            {
               member ? member?.map((member, idx) => (
            <tr key={idx}>
            
                <td>{member[1].firstname}</td>
                <td>{member[1].lastname}</td>
              <td>{member[1].email}</td>
              <td>{member[1].phone}</td>
            </tr>
 ) ) : null
}
{
               member ? member?.map((member, idx) => (
            <tr key={idx}>
           
                <td>{member[2].firstname}</td>
                <td>{member[2].lastname}</td>
              <td>{member[2].email}</td>
              <td>{member[2].phone}</td>
            </tr>
) ) : null
}

{
member ? member?.map((member, idx) => (
            <tr key={idx}>
                <td>{member[3].firstname}</td>
                <td>{member[3].lastname}</td>
              <td>{member[3].email}</td>
              <td>{member[3].phone}</td>
            </tr>
            ) ) : null
}

{
member ? member?.map((member, idx) => (
            <tr key={idx}>
                <td>{member[4].firstname}</td>
                <td>{member[4].lastname}</td>
              <td>{member[4].email}</td>
              <td>{member[4].phone}</td>
            </tr>
         ) ) : null
        }
        
           {
member ? member?.map((member, idx) => (
            <tr key={idx}>
                <td>{member[5].firstname}</td>
                <td>{member[5].lastname}</td>
              <td>{member[5].email}</td>
              <td>{member[5].phone}</td>
                </tr>
         ) ) : null
        }

           {
member ? member?.map((member, idx) => (
            <tr key={idx}>
                <td>{member[6].firstname}</td>
                <td>{member[6].lastname}</td>
              <td>{member[6].email}</td>
              <td>{member[6].phone}</td>
                </tr>
         ) ) : null
        }

           {
member ? member?.map((member, idx) => (
            <tr key={idx}>
                <td>{member[7].firstname}</td>
                <td>{member[7].lastname}</td>
              <td>{member[7].email}</td>
              <td>{member[7].phone}</td>
                </tr>
         ) ) : null
        }

           {
member ? member?.map((member, idx) => (
            <tr key={idx}>
                <td>{member[8].firstname}</td>
                <td>{member[8].lastname}</td>
              <td>{member[8].email}</td>
              <td>{member[8].phone}</td>
                </tr>
         ) ) : null
        }

           {
member ? member?.map((member, idx) => (
            <tr key={idx}>
                <td>{member[9].firstname}</td>
                <td>{member[9].lastname}</td>
              <td>{member[9].email}</td>
              <td>{member[9].phone}</td>
                </tr>
         ) ) : null
        }
         

            
            
          </tbody>
       </table>
    </div>
    </div>
  )
}

export default Member