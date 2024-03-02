import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
export function Dashboard(){
    const[balance,setBalance]=useState("")
    
    const[queryParameters]=useSearchParams();
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{Authorization:"Bearer "+localStorage.getItem("token")}
        }).then(response=>setBalance(response.data.balance))
    },[balance])
    return(<>
    <div className="p-20">
        <Appbar appName="PayME" username={queryParameters.get("name")} ></Appbar>
        <Balance balance={balance}></Balance>
        <Users></Users>
    </div>
    
    </>)
}