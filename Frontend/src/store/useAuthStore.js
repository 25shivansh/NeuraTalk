import { Axios } from "axios";
import { create  } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
export const userAuthStore=create((set)=>({
    authUser:null,
    isCheckingAuth:true,
    isLoggingIn:false,
    isSigningUp:false,
    isUpdateProfile:false,
    checkAuth:async()=>{
        try{
            const res=await axiosInstance.get("/auth/check");
            set({authUser:res.data});


        }catch(error){
            console.log("Error in checkAuth", error);
            set({authUser:null});

        }finally{
            set({
                isCheckingAuth:false
            })
        }
    },
    signup:async (data)=>{
        set({isSigningUp:true});
        try{
            const res=await axiosInstance.post("/auth/signup",data);
            toast.success("Account created Successfully");
            set({
                authUser:res.data
            })
        }catch(error){
           toast.error(error.response.data.message); 
        }finally{
            set({isSigningUp:false})
        }
    },
    logout:async ()=>{
        try{
            await axiosInstance.post("/auth/logout");
            set({authUser:null});
            toast.success("Logged out successfully")
        }catch(error){
            toast.error(error.response.data.message);
        }
    },
    login:async(data)=>{
        set({isLoggingIn:true});
        try{
            const res=await axiosInstance.post("/auth/login",data);
            set({authUser:res.data});
            toast.success("Logged in Successfully")
            
        }catch(error){
            toast.error(error.resposne.data.message);
        }finally{
            set({isLoggingIn:false})
        }

    }
}))