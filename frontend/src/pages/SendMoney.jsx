import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";

export function SendMoney(){
    return(<>
   
    <div className=" flex justify-center mt-56"> 

        <div className="p-5 shadow-2xl lg:w-1/3 sm:w-1/2 ">
        <Heading label={"Send Money"}></Heading>
        <br /><br /><br />
        <Avatar Uname={"arghya"} username={"arghya"} ></Avatar>
        <InputBox id={"amount"} inputType="number" label={"Amount (in Rs)"} placeholder={"Enter amount"}></InputBox>
        <Button label={"Intial Transfer"}></Button>
        </div>
    </div>
    
    </>)

}