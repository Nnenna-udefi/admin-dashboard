import React from 'react'
// import Dashboard from '../../pages/dashboard'
import {useState, useEffect} from 'react'
import Navbar from '../../pages/Navbar'

const Member = () => {

  const [member, setMember] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [error, setError] = useState(null)

  useEffect(() => {

const fetchData = async ()=> {
  try {
    const res = await fetch('https://fakerapi.it/api/v1/persons?_quantity=10');
  const {data, code} = await res.json();
  if (code !== 200){
    throw Error("Something went wrong");
  }

  setIsLoading(false);
  setMember(data);
}
catch(error){
  setIsLoading(false);
  setError(error.message);
}
};
fetchData();
  }, []);
    



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
               member.map(({firstname, lastname, email, phone, id}) => (
              <tr key={id}>
                <td>{firstname}</td>
                <td>{lastname}</td>
              <td>{email}</td>
              <td>{phone}</td>
            </tr>
               ))}
            
            
          </tbody>
       </table>
    </div>
    </div>
  )
}

export default Member