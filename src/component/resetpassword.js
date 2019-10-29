import React, {useState} from 'react';
import '../style/style.css';
import {Signin} from './signin'

export const ResetPassword =()=>{
var [viewpage, setViewPage] = useState('resetpassword');
  const showLogin = ()=>
  {
    
     setViewPage('signin');

  }
return (
  viewpage ==='signin' ? <Signin /> : <div className="partialDivView">
   <h3>Reset Password</h3>
              
                           
               <div className="form-group">
                <label>Email address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
               <button className="btn btn-success">Reset Password</button>
               <p><span onClick={showLogin} className="Linksyle"> Login here </span></p>
               <br/>
              </div>
            </div>
)

}