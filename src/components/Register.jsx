import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate()
    const handleForm=async(e)=>{
        e.preventDefault();
        try {
            const user=await createUserWithEmailAndPassword(
                auth,
                email,
                password
            ) 
            console.log(user)
            navigate("/login")
            
        } catch (error) {
            console.log(error)
            
        }

    }
  return (
    <div>
        <h1>Please Register Here</h1>
      <form onSubmit={handleForm} action="#" method="post">
        <div className="mb-4">
         
          <input
            type="email"
            placeholder="enter email here"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
