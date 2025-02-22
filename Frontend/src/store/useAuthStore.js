import { Axios } from "axios";
import { create  } from "zustand";
import { axiosInstance } from "../lib/axios";
export const userAuthStore=create((set)=>({
    authUser:null,
    isCheckingAuth:true,
    isLoggingIn:false,
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
    }
}))