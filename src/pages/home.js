import React, {useState} from 'react';
import '../style/style.css';

import {Signup} from '../component/signup';


export const Home =()=>{
  //var [viewpage, setViewPage] = useState('signup');
 
 return (
    
    <div className="row">
      <div className="col-md-8" className="frontDiv">
        <img className="homepic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR831FSlhTeJt_MudWbzsFRjcBZ90r2RhhSmcSpCR-oC4WsAQil&s" />
          <h3>Rent.com</h3>
          <div>Signup now and get unlimited access diffent Accomodations you can ever think of.</div>
      </div>
      <div className="col-md-4">
           <Signup />
      </div>
    </div>

 );

}