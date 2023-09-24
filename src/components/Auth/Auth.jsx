import React, { useState } from 'react'
import Navbar from '../navbar/navbar';
import './auth.css'

function Auth() {
  const [isActive, setIsActive] = useState(false);
  function toggleForm(){
    setIsActive(!isActive);
  }
  return (
    <div>
<Navbar/>
     <section>
     <div className={`container ${isActive ? 'active' : ''}`}>
      <div class="user signinBx">
        <div class="imgBx"><img src="https://images.unsplash.com/photo-1644221362205-353214a3124e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJhdyUyMGhvbmV5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" /></div>
        <div class="formBx">
          <form action="" onsubmit="return false;">
            <h2>Sign In</h2>
            <input type="text" name="" placeholder="Username" />
            <input type="password" name="" placeholder="Password" />
            <input type="submit" name="" value="Login" />
            <p class="signup">
              Don't have an account ?
              <a href="#" onClick={toggleForm}>Sign Up.</a>
            </p>
          </form>
        </div>
      </div>
      <div class="user signupBx">
        <div class="formBx">
          <form action="" onsubmit="return false;">
            <h2>Create an account</h2>
            <input type="text" name="" placeholder="Username" />
            <input type="email" name="" placeholder="Email Address" />
            <input type="text" name="" placeholder="Phone number Eg 0704" />
            <input type="password" name="" placeholder="Create Password" />
            <input type="password" name="" placeholder="Confirm Password" />
            <input type="submit" name="" value="Sign Up" />
            <p class="signup">
              Already have an account ?
              <a href="#" onClick={toggleForm}>Sign in.</a>
            </p>
          </form>
        </div>
        <div class="imgBx"><img src="https://images.unsplash.com/photo-1542243413692-f1939950f4ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJhdyUyMGhvbmV5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" /></div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Auth