import React, { useState } from 'react';
import './progresschart.css';
import { CalendarHeatmap } from 'reaviz';
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
            <div style={{ display: 'flex' }}>
      <CalendarHeatmap
        height={200}
        width={150}
        view="month"
        data={marchHeatMapData}
      />
     </div>
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
 const marchHeatMapData = [
    { key: new Date('2020-03-01T08:00:00.000Z'), data: 0},
    { key: new Date('2020-03-02T08:00:00.000Z'), data: 32 },
    { key: new Date('2020-03-03T08:00:00.000Z'), data: 31 },
    { key: new Date('2020-03-04T08:00:00.000Z'), data: 1 },
    { key: new Date('2020-03-05T08:00:00.000Z'), data: 38 },
    { key: new Date('2020-03-06T08:00:00.000Z'), data: 32 },
    { key: new Date('2020-03-07T08:00:00.000Z'), data: 23 },
    { key: new Date('2020-03-08T08:00:00.000Z'), data: 41 },
    { key: new Date('2020-03-09T07:00:00.000Z'), data: 7 },
    { key: new Date('2020-03-10T07:00:00.000Z'), data: 40 },
    { key: new Date('2020-03-11T07:00:00.000Z'), data: 40 },
    { key: new Date('2020-03-12T07:00:00.000Z'), data: 24 },
    { key: new Date('2020-03-13T07:00:00.000Z'), data: 2 },
    { key: new Date('2020-03-14T07:00:00.000Z'), data: 36 },
    { key: new Date('2020-03-15T07:00:00.000Z'), data: 20 },
    { key: new Date('2020-03-16T07:00:00.000Z'), data: 1 },
    { key: new Date('2020-03-17T07:00:00.000Z'), data: 8 },
    { key: new Date('2020-03-18T07:00:00.000Z'), data: 0 },
    { key: new Date('2020-03-19T07:00:00.000Z'), data: 1 },
    { key: new Date('2020-03-20T07:00:00.000Z'), data: 31 },
    { key: new Date('2020-03-21T07:00:00.000Z'), data: 35 },
    { key: new Date('2020-03-22T07:00:00.000Z'), data: 6 },
    { key: new Date('2020-03-23T07:00:00.000Z'), data: 9 },
    { key: new Date('2020-03-24T07:00:00.000Z'), data: 26 },
    { key: new Date('2020-03-25T07:00:00.000Z'), data: 42 },
    { key: new Date('2020-03-26T07:00:00.000Z'), data: 31 },
    { key: new Date('2020-03-27T07:00:00.000Z'), data: 26 },
    { key: new Date('2020-03-28T07:00:00.000Z'), data: 23 },
    { key: new Date('2020-03-29T07:00:00.000Z'), data: 49 },
    { key: new Date('2020-03-30T07:00:00.000Z'), data: 30 },
    { key: new Date('2020-03-31T07:00:00.000Z'), data: 47 }
  ];
export default Progresschart;