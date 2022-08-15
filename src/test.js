import React from "react";
import {Link} from "react-router-dom";


function Test(){
   return(
       <div>
           <h2>Список задач</h2>
           <button><Link to="/">Назад</Link></button>
       </div>
   )
}

export default Test