import React from 'react'
import './activity.css'
import { VscCallIncoming, VscCallOutgoing } from "react-icons/vsc";

function Activity(props) {
  const date = new Date(props.created_at).toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'})
  const time = new Date(props.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true});

  return (
    <div className='activity' onClick={e => (props.handleCallClick(e, props.id))}>
      {!props.datesArray.includes(date) && <div className="date">
        <span>{date}</span>
        <code>{props.datesArray.push(date)}</code>
      </div>}
      <div className="call">
        <div className="left">
          {props.direction === 'inbound' ?
            props.call_type === 'answered' ? <div className="icon"><VscCallIncoming /></div> : <div className="icon_missed"><VscCallIncoming /></div>
            :
            props.call_type === 'answered' ? <div className="icon"><VscCallOutgoing /></div> : <div className="icon_missed"><VscCallOutgoing /></div>
          }
          <div className="desc">
            <span className='num'>{props.from}</span>
            {props.to ? <span className='text'>tried to call on <b>{props.to}</b></span> : <span className='text'>called <b>unidentified person</b></span>}
          </div>
        </div>
        <div className="right">
          <span>{time.substr(0, 5)}</span>
          {time.includes('pm') ? <span className='abbr_PM'>PM</span> : <span className='abbr_AM'>AM</span>}
        </div>
      </div>
    </div>
  )
}
export default Activity
