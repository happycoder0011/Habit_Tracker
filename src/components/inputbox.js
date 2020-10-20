import React,{useState } from 'react';
import './inputbox.css';
import Progresschart from './progress_chart';
function Inputbox(){
    const [habitname,setHabitname] = useState();
    const [addhabit,setAddhabit] = useState(false);
  
    const addhabitfunc = () => {
    setAddhabit(!addhabit);
    }

        return(
            <>
            <div className="box">
            <label className="label">Habit name</label><br/>
            <input className="input" ></input><br/>
            <label class="label">Timeline(Days)</label><br/>
            <input className="input"></input><br/>
            <button className="button" onClick={addhabitfunc}>ADD</button>
            {addhabit && <Progresschart />}
            </div>
            </>
        )}


export default Inputbox;