import { useState, useEffect } from 'react'
import axios from 'axios'

function Add() {
  const [mentor, setMentor] = useState([])
  const [student, setStudent] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/getmentor')
      .then((res) => {
        setMentor(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:5000/getstudent')
      .then((res) => {
        setStudent(res.data)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, [])


  return (
    <>
      <h3 className="month"> </h3>
      <div className="App">
      <div>
      </div>
        <select className="form-select m-2" aria-label="">
          <option selected>-Select Mentor-</option>
        {
          mentor.map((data)=>(
            <option key={data._id}>{data.name}</option>
          )) 
        }
        </select>
        <select className="form-select m-2" aria-label="">
          <option selected>-Select Students-</option>
          {
          student.map((data)=>(
            <option key={data._id}>{data.name}</option>
          )) 
        }
        </select>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-danger"
          >
            Assign
          </button>
        </div>
      </div>
    </>
  )
}

export default Add
