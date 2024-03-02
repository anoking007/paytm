import { useEffect, useState } from "react";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Users() {
    const [users,SetUsers]=useState([])
    const[filter,setFilter]=useState("")
    useEffect( ()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
        .then(response=>{SetUsers(response.data.user)})
        
        
    },[filter])
    
    return (
        <>
      <div>
        <InputBox onChange={(e)=>setFilter(e.target.value)}
          id={"users"}
          inputType={"text"}
          label={"Users"}
          placeholder={"Search Users..."}
          ></InputBox>
       <div>
        {users.map((e)=><User name={e}></User> )}
       </div>
      </div>
    </>
  );
}

function User({name}){
    const navigate=useNavigate();
    return(<>
        <div className="flex justify-between py-4">
                <Avatar username={name.firstName+" "+name.lastName} Uname={name.firstName+" "+name.lastName}></Avatar>
                <Button onClick={()=>navigate("/send?id="+name._id+"&name="+name.firstName)} label={"Send Money"}></Button>
        </div>

    </>)
}
