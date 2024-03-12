import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const handleForm=async(e)=>{
        e.preventDefault();
        try {
            const user=await signInWithEmailAndPassword(
                auth,
                email,
                password
            ) 
            console.log(user)
            if(user.length!=0){
                alert("your login is done")
            }
            
            
        } catch (error) {
            console.log(error)
            
        }

    }
    const googleLogin= async(e)=>{
        e.preventDefault()
        try {
            const provider = new GoogleAuthProvider();
            const user=await signInWithPopup(auth,provider);
            console.log(user)
            
        } catch (error) {
            console.log(error)
            
        }
        

    }
  return (
    <div>
        <h1 className="text-xl m-4">Please Login Here</h1>
      <form onClick={handleForm} action="#" method="post">
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="enter email here"
            id="email"
            name="email"
            className="mt-1 p-2 w-1/2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="enter password here"
            id="password"
            name="password"
            className="mt-1 p-2 w-1/2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 w-32 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        <div>
          <Link to="/" className="text-xl mt-2 btn btn-active btn-link">New here ?Plz register</Link>
          <div onClick={googleLogin} className="flex justify-center items-center  mt-4 gap-2">
            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" className="w-8"></img>
            <p className="text-xl">Login With Google</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
