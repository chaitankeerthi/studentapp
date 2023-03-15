import React from "react";
 import Studentdata from './Data';
import Grades from "./grades";
const Dashboard=()=>{
    return(
        <div>
            <h3>{Studentdata.length}</h3>
            <h3>
                {Grades.length}
            </h3>
            <h3>Average percentage:97%</h3>
        </div>
    )
}
export default Dashboard