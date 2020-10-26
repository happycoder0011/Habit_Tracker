import React,{useState } from 'react';
import './inputbox.css';
import Progresschart from './progress_chart';
function Inputbox(){
    const [addhabit,setAddhabit] = useState(false);
  
    const addhabitfunc = () => {
    setAddhabit(!addhabit);
    }

        return(
            <>
            <div className="box">
            <label className="label">Habit name</label><br/>
            <input className="input" ></input><br/>
            <label className="label">Timeline(Days)</label><br/>
            <input className="input"></input><br/>
            <button className="button" onClick={addhabitfunc}>ADD</button>
           
            </div>
            {addhabit && <Progresschart />}
            </>
        )}


export default Inputbox;