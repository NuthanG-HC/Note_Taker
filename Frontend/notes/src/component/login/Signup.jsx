import React, { useState } from 'react';
import "./sign.css"

function Signup(props) {
    const [form, setForm] = useState({email:"", password:""})
    const [confirmPassword, setConfirmPassword] = useState("")
    const [rem, setRem] = useState("off")
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(confirmPassword!==form.password){
            return alert("password and confirm password must be matched")
        }
        else{
           fetch("http://localhost:4000/register", {
            method:"post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body:JSON.stringify(form)
           })
        }
        console.log(form)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className='form-inputs'>
                    <label htmlFor="email">Email adress</label>
                    <input type="email" placeholder='Enter Email' id='email' onChange={(e)=>setForm({...form, email:e.target.value})} required />
                </div>
                <div className='form-inputs'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' id='password' onChange={(e)=>setForm({...form, password:e.target.value})} required/>
                </div>
                <div className='form-inputs'>
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input type="password" placeholder='Repeat Password' id='confirm-password' onChange={(e)=>setConfirmPassword(e.target.value)} required />
                </div>
                <div className='check-box-container'>
                    <input type="checkbox" id='check' onChange={(e)=>setRem((old)=>{return (old==="off")?"on":"off"})} required/>
                    <label htmlFor="ckeck">I agree with Terms & conditons</label>
                </div>
                <div className='form-inputs'>
                    <button >Continue</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;