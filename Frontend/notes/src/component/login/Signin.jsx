import React from 'react';
import "./sign.css"
function Signin(props) {
    return (
        <div className='container'>
            <form>
                <h1>Sign In</h1>
                <div className='form-inputs'>
                    <label htmlFor="email">Email adress</label>
                    <input type="email" placeholder='Enter Email' id='email' />
                </div>
                <div className='form-inputs'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' id='password' />
                </div>
                <div className='check-box-container'>
                    <input type="checkbox" id='check' />
                    <label htmlFor="ckeck">Remember</label>
                </div>
                <div className='form-inputs'>
                    <button>Submit</button>
                </div>
                <div className='forgot'>
                    <p>Forgot <span style={{color:"blue"}}>password?</span></p>
                </div>
            </form>
        </div>
    );
}

export default Signin;