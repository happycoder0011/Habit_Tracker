import React, { Component,useState} from 'react';
import ReactDOM, { render } from 'react-dom';
import './profile.css';
import img from './../assets/img.jpg';
import Progresschart from './progress_chart';
import Inputbox from './inputbox';
function Profile()
{
  const [habit,setHabit] = useState(false);
  
  const addhabit = () => {
    setHabit(!habit);
  }   
    return(
      <>
      <div className="profile_box">
      <img className="profile_image" src={img}></img>
      <div className="name" >My name</div>
      <div className="Qoute">Qoute</div>
      <button className="addhabit" onClick={addhabit}>ADD NEW HABIT</button>
      </div>
      {habit && <Inputbox/>}
      </>
    )
}

export default Profile;