import React, {useState} from 'react';
import {Signup} from './signup'
import {ResetPassword} from './resetpassword'
import '../style/style.css';

export const Signin =()=>{

var [viewpage, setViewPage] = useState('signin');
  const showSignup = ()=>
  {   
     setViewPage('signup');
  }
  
  const showresetpassword = ()=>
  {    
     setViewPage('resetpassword');
  }
return (
   viewpage === 'signup' ? <Signup /> : viewpage === 'resetpassword' ? <ResetPassword /> :
  <div className="partialDivView">
  <h3>Sign In</h3>
              
               <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" />
              </div>
               <div className="form-group">
                <label>Password</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
               <button className="btn btn-success">Signin</button>
               <br/>
               <p>don't have an account ? <span onClick={showSignup} className="Linksyle"> click here to signup </span></p>
               <p>forgot password ? <span onClick={showresetpassword} className="Linksyle"> click here to reset password </span></p>
              </div>
            </div>
)

}