import React, { useState, useEffect } from 'react'
import './detail.css'
import { IoChevronBack } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';

function Detail(props) {
  const [isFetching, setIsFetching] = useState(false)
  const [callDetails, setCallDetails] = useState({})

  const date = new Date(callDetails.created_at).toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'})
  
  const handleArchiveClick = (e, action) => {
    const copyObj = Object.assign({}, callDetails)
    
    if (action === 'archive'){
      axios.post('https://aircall-job.herokuapp.com/activities/' +props.id, {is_archived: true})
      .then(res => {
        copyObj.is_archived = true
        setCallDetails(copyObj)
      })
    } else {
      axios.post('https://aircall-job.herokuapp.com/activities/' +props.id, {is_archived: false})
      .then(res => {
        copyObj.is_archived = false
        setCallDetails(copyObj)
      })
    }   
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
              {callDetails.is_archived 
              ?  <button className='archived' onClick={e => handleArchiveClick(e, 'unarchive')}>Unarchive</button> 
              :  <button className='unarchived' onClick={e => handleArchiveClick(e, 'archive')}>Archive</button>}
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Detail
