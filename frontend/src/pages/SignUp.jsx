import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import {useNavigate} from "react-router-dom"
import axios from "axios"
export function SignUp(){
    const [username,setUsername]=useState("")
    const [firstName,setFirstname]=useState("")
    const [lastName,setLastname]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    return(<>
        <div className=" flex justify-center items-end">
        <div className="shadow-2xl mt-10 px-4 rounded-md bg-slate-300 sm:w-1/2 lg:w-1/3">
            <Heading label="Sign Up"></Heading>
            <SubHeading label="Enter your information to create an account"></SubHeading>
            <InputBox onChange={(e)=>{setFirstname(e.target.value)}} id="First_name" inputType="text" label="First Name" placeholder="Arghya"></InputBox>
            <InputBox onChange={(e)=>{setLastname(e.target.value)}} id="Last_name" inputType="text" label="Last Name" placeholder="Ghosh"></InputBox>
            <InputBox onChange={(e)=>{setUsername(e.target.value)}} id="Email" inputType="email" label="Email" placeholder="Arghya123@gmail.com"></InputBox>
            <InputBox onChange={(e)=>{setPassword(e.target.value)}} id="password" inputType="password" label="Password" placeholder="123456"></InputBox>
            <Button label="Sign Up" onClick={async ()=>{
                 const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
                    username,
                    firstName,
                    lastName,
                    password
                })
                localStorage.setItem("token",response.data.token )
                navigate("/Dashboard?name="+response.data.username)
            }} ></Button>
            <BottomWarning linkTo="Sign in" link="/signin" warningMessage="Already have an account?"></BottomWarning>

        </div>
        </div>
    
    
    
    </>)
}