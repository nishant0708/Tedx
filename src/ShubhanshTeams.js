
import Teams from './components/Teams';
import Header from './components/Header';
import Years from './components/Years';
import data from './cardData.json';
import { useState } from 'react';

function ShubhanshTeams() {

  const [info ,setInfo] = useState(data);

  // console.log(info);
  let coreTeam = info[2024]['Core Team'];
  // console.log(coreTeam);

  let webDev = info[2024]['Web Dev Team'];
  // console.log(webDev);


  
  return (
    <div className="subh">
      <div className='fixed-headings'>
          <Header/>
      </div>

      <Teams/>
      <Teams/>
      <Teams />
      <Teams />
    </div>
  );
}

export default ShubhanshTeams;
