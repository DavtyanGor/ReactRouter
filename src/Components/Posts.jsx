import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";


export default function Posts() {
  const [users, setUsers] = useState([])
  const [val, setVal] = useState('')
  const [opt, setOpt] = useState([])
  useEffect(() => {
   val == '' ? axios.get('https://jsonplaceholder.typicode.com/posts/').then(response => {
      console.log(response.data);
      setOpt(response.data)
      setUsers(response.data)
    }) : axios.get(`https://jsonplaceholder.typicode.com/posts/${val}`).then(response => {
      setUsers([response.data])
    })
  }, [val])

  
  return (
    <div>
      <select style={{width: '200px', height: '50px'}} onChange={(e) => {
        setVal(e.target.value)
        users.filter(items => {
          console.log(items.id);
          return console.log(items.id !== val)
        }).map(items =>{
          return items
        })
      }} value={val}>
        <option value=''>Not Value</option>
        {opt.map(({id}) => {
          return <option key={id}>{id}</option>
        })}
      </select>
      {users.map(({id, title, body}) =>(
      <React.Fragment key={id}>
        <p>{id}.{title}</p>
        <p>{body}</p>
      </React.Fragment>
      ))}
    </div>
  )
}
