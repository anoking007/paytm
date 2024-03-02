import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
export function SignIn(){
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
    return(<>
        <div className=" flex justify-center items-end">
        <div className="shadow-2xl mt-10 px-4 rounded-md bg-slate-300 sm:w-1/2 lg:w-1/3">
            <Heading label="Sign In"></Heading>
            <SubHeading label="Enter your credentials to acess your account"></SubHeading>
            <InputBox onChange={(e)=>{setUsername(e.target.value)}} id="Email" inputType="email" label="Email" placeholder="Arghya123@gmail.com"></InputBox>
            <InputBox onChange={(e)=>{setPassword(e.target.value)}} id="password" inputType="password" label="Password" placeholder="123456"></InputBox>
            <Button onClick={async ()=>{
                const response=await axios.post("http://localhost:3000/api/v1/user/signin",{
                    username,
                    password
                })
                
                localStorage.setItem("token",response.data.token)
                navigate("/Dashboard?name="+response.data.username)
                
            }} label="Sign In" ></Button>
            <BottomWarning linkTo="Sign Up" link="/signUp" warningMessage="Don't have an account?"></BottomWarning>

        </div>
        </div>
    
    
    
    </>)
}