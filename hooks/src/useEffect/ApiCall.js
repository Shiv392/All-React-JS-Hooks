import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';

function ApiCall() {
    const [person,setPerson]=useState({})
    useEffect(()=>{
   console.log('this is shiv soni');
  api();
    },[])
    const api=async ()=>{
        let res=await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(res);
        setPerson(res.data);
        console.log(person);
    }
  return (
  <div className='container mt-5'>
      <h3 className='text text-primary'>UseEffect</h3>
    <p className='text text-dark'>Api callin when this project render complety from scartch</p>
    <div className='container mt-2'>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
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
    </div>
  )
}

export default ApiCall
