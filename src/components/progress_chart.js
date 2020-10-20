import React, { useState } from 'react';
import './progresschart.css';
function Progresschart(){
        const [count,setCount] = useState(0);
        var add=[];
         for(var i=0;i<count;i++)
            {
                add.push(<li data-level="2"></li>); 
            }
          
    
        return(
            <>
            <div className="box">
            <label className="label">Done for today?</label>
            <button className="button" onClick={() => setCount(count+1)}>Oh yes!!</button><br/>
            <h4 className="label">habit</h4>
            <div className="graph_box">
             <div className="graph">
             <ul className="months">
             <li>Jan</li>
             <li>Feb</li>
             <li>Mar</li>
             <li>Apr</li>
             <li>May</li>
             <li>Jun</li>
             <li>Jul</li>
             <li>Aug</li>
             <li>Sep</li>
             <li>Oct</li>
             <li>Nov</li>
             <li>Dec</li>
             </ul>
    
            <ul className="days">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
            </ul>
            <ul className="squares">
                {add.map(row => row)}
            </ul>
        </div>
        </div>
        </div>
        </>
                );
    

}

export default Progresschart;