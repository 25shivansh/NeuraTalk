import React from 'react'
import { useState } from 'react'
import { userAuthStore } from '../store/useAuthStore';

function SignUpPage() {
    const [showPassword,setShowPassword]=useState({
        fullName:"",
        email:"",
        password:"",
    });
    const {signup,isSigningUp}=userAuthStore();
    const validateForm=()=>{

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  
  
  
  
    return (
        <>
        {/* left side */}
    <div>

   </div>
        
        
        </>
    
  )
}

export default SignUpPage
