import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { InputBox } from "./InputBox";

export function Users() {
  // const [users,SetUsers]=useState()
  let users = "arghya";
  return (
    <>
      <div>
        <InputBox
          id={"users"}
          inputType={"text"}
          label={"Users"}
          placeholder={"Search Users..."}
        ></InputBox>
        <div className="flex justify-between py-4">
          <Avatar username={users} Uname={users}></Avatar>
          <Button label={"Send Money"}></Button>
        </div>
      </div>
    </>
  );
}

// function User({users}){
//     return(<>
//         <div className="flex justify-between py-4">
//                 <Avatar username={users} Uname={users}></Avatar>
//                 <Button label={"Send Money"}></Button>
//         </div>

//     </>)
// }
