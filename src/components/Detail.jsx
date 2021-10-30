import React, { useState, useEffect } from 'react'
import './detail.css'
import { IoChevronBack } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';

function Detail(props) {
  const [isFetching, setIsFetching] = useState(false)
  const [callDetails, setCallDetails] = useState([])
  const [isArchived, setIsArchived] = useState(false)

  const date = new Date(callDetails.created_at).toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'})

  const handleArchiveClick = (e) => {
    e.preventDefault()
    axios.post('https://aircall-job.herokuapp.com/activities/' +props.id, {is_archived: true})
      .then(res => {
        setIsArchived(true)
      })
  }

  //API call
  useEffect(() => {
    setIsFetching(true)
    setTimeout(() => {
      axios.get('https://aircall-job.herokuapp.com/activities/' +props.id)
      .then(res => {
        setIsFetching(false)
        setCallDetails(res.data)
      })
    }, 200)   
  }, [])

  return (
    <div className='detail'>
      <IoChevronBack className='back' onClick={props.handleClick}/>
        {isFetching ? 
          <div className="spinner"></div> 
          : 
          <div className="card">
            <div className="user">
              <FaUserCircle className='avatar'/>
              <span className='name'>{callDetails.from}</span>
              <span className='via'>{callDetails.via}</span>
            </div>
          <div className="desc_details">
            <div className="call_details">
              <span className='to'>{callDetails.to}</span>
              <span>{date}</span>
              <span>{callDetails.call_type} {callDetails.direction} call that lasted {callDetails.duration} seconds</span>
            </div>
            <div className="button">
              {isArchived ? <button className='archived'>Archived</button> :  <button className='primary' onClick={handleArchiveClick}>Archive</button>}
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Detail
