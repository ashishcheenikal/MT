import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Edit from '../Edit'
import AddNewBook from '../AddNewBook'


function Home() {
  const [editVisible, setEditVisible] = useState(false)
  const [addVisible, setAddVisible] = useState(false)
  const [Data, setData] = useState([])
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getAllBooks`)
      setData(data)
      console.log(data);
    }
    fetch()
  }, [])
  return (
    <div className='body'>{
      Data.map((value, index) => (
        <div className='card' key={index}>
          <div className="country">{value.bookName}</div>
          <div className="region">{value.authorName}</div>
          <div className="region">{value.publishYear}</div>
          <div className="region">{value.price}</div>
          <div className="region">{value.status}</div>
          {editVisible && <Edit id={value._id} setEditVisible={setEditVisible} />}
          <button key={index} onClick={() => {
            setEditVisible((prev) => (!prev))
          }} >Edit</button>
        </div>
      ))
    }
      <button onClick={() => {
        setAddVisible((prev) => (!prev))
      }}>Add New Book</button>
      {addVisible && <AddNewBook />}
    </div>
  )
}

export default Home