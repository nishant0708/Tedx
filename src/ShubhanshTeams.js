import './App.css';
import Teams from './components/Teams';
import Header from './components/Header';
import Years from './components/Years';
import data from './teamData.json';
import { useState } from 'react';
import TeamSection from './components/TeamSection';

function ShubhanshTeams (){

  // const [info ,setInfo] = useState(data);

  // // console.log(info);
  // let coreTeam = info[2024]['Core Team'];
  // // console.log(coreTeam);

  // let webDev = info[2024]['Web Dev Team'];
  // // console.log(webDev);


  
  return (
    <div className="Shubhansh-teams-App">
      <TeamSection />

    </div>
  );
}
export default ShubhanshTeams;
