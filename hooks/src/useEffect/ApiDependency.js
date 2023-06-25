import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ApiDependency() {
    const [id,setId]=useState(1);
    const [person,setperson]=useState({});
    useEffect(()=>{
        ApiCall()
    },[id]);
    const ApiCall=async()=>{
   let res=await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
   setperson({...res.data});

    };
   return (
    <div className='container mt-2'>
      <p className='text text-danger'>useEffect will call every time according to input field dependancy</p>
     <form>
        <div className='col-6'>
            <input className='form-control' type='number' value={id} onChange={e=> setId(e.target.value)} id='id' />
           </div>
     </form>
     <table className='table table-dark'>
        <thead>
            <tr>
                <th>userId</th>
                <th>Id</th>
                <th>Title</th>
                 <th>Completed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{person.userId}</td>
                <td>{person.id}</td>
                <td>{person.title}</td>
                <td>{person.completed}</td>
            </tr>
        </tbody>
     </table>
    </div>
  )
}

export default ApiDependency
