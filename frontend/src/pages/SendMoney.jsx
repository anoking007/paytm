
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
export function SendMoney(){
    const[queryParameters]=useSearchParams();
    const[amount,setAmount]=useState(0)
    
   
    return(<>
   
    <div className=" flex justify-center mt-56"> 

        <div className="p-5 shadow-2xl lg:w-1/3 sm:w-1/2 ">
        <Heading label={"Send Money"}></Heading>
        <br /><br /><br />
        <Avatar Uname={queryParameters.get("name")} username={queryParameters.get("name")} ></Avatar>
        <InputBox onChange={(e)=>setAmount(e.target.value)} id={"amount"} inputType="number" label={"Amount (in Rs)"} placeholder={"Enter amount"}></InputBox>
        <Button onClick={ async ()=>{
        await axios.post("http://localhost:3000/api/v1/account/transfer",{
            to:queryParameters.get("id"),
            amount:parseFloat(amount),
        },{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        })
        alert("Transfer successful")
        
    }} label={"Intial Transfer"}></Button>
        </div>
    </div>
    
    </>)

}