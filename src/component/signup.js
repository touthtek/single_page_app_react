import React, {useState} from 'react';
import {Signin} from './signin';
import '../style/style.css';

export const Signup =()=>{
  var [viewpage, setViewPage] = useState('signup');
  const showSignin = ()=>
  {
    
     setViewPage('signin');
      //g
  }
return (
       viewpage === 'signin' ? <Signin/> :
          <div className="partialDivView">
              <div className="form-group">
                <label>Firstname</label>
                <input type="text" className="form-control" />
              </div>
               <div className="form-group">
                <label>Lastname</label>
                <input type="text" className="form-control" />
              </div>
               <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" />
              </div>
               <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" />
              </div>
               <div className="form-group">
                <label>Password</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
               <button className="btn btn-success">Signup</button>
               <br/>
               <p>have an account ? <span onClick={showSignin} className="Linksyle"> click here to login </span></p>
              </div>
            </div>
)

}