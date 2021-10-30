import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';
import Activity from './components/Activity.jsx';
import Detail from './components/Detail.jsx';

const App = () => {
  const [state, setState] = useState([])
  const [view, setView] = useState('calls')
  const datesArray = [] //This checks if the date has already been rendered, will make sure we don't render the same date twice

  const handleCallClick = (e, id) => {
    e.preventDefault()
    setView(`${id}`)
  }

  const handleClick = (e) => {
    e.preventDefault()
    setView('calls')
  }

  //Map through all of the calls in the API
  const calls = state.map(call => {
    
    return (!call.is_archived && <Activity 
      key={call.id}
      id={call.id}
      created_at={call.created_at}
      direction={call.direction}
      from={call.from}
      to={call.to}
      via={call.via}
      duration={call.duration}
      is_archived={call.is_archived}
      call_type={call.call_type}
      datesArray={datesArray}
      handleCallClick={handleCallClick}
    />)
  })

  //API call
  useEffect(() => {
    axios.get('https://aircall-job.herokuapp.com/activities')
      .then(res => {setState(res.data)})
  }, [view])

  return (
    <div className='container'>
      <Header/>
      {view === 'calls' ? 
        <div className="container-view">{calls}</div>
        :
        <div className="card-view">
          <Detail 
            handleClick={handleClick}
            id={view}
          />
        </div>
      }
      <Footer/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
