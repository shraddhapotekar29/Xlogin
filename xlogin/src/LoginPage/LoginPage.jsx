import React, { useState } from "react";
const LoginPage=()=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[welcome,setWelcome]=useState(false);
    const[invalidForm,setInvalidForm]=useState(false);
    const submitForm=(e)=>{
        e.preventDefault(); 
        if(username==="user" && password==="password")
        {
            setWelcome(true);    
        }
        if(username!=="user" && password!=="password")
        {
             setInvalidForm(true);
        }

    }
    return(<>
    <h2>Login Page</h2>
    {welcome?(<h3>Welcome, user!</h3>):(
    <form onSubmit={(e)=>submitForm(e)}>
         {invalidForm && <h4>Invalid username or password</h4>}
    <label htmlFor="user">Username:</label>
    <input type="text" id="user" placeholder="username" value={username} required onChange={(e)=>{setUsername(e.target.value)}}/>
    <br/>
    <label htmlFor="pass">Password:</label>
    <input type="password" id="pass" placeholder="password" value={password} required onChange={(e)=>{setPassword(e.target.value)}}/>
    <br/>
    <button type="submit">Submit</button>
    </form>)}
    </>)
}
export default LoginPage;