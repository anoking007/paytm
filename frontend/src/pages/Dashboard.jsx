import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard(){
    return(<>
    <div className="p-20">
        <Appbar appName="PayME" username="arghya" ></Appbar>
        <Balance balance="10000"></Balance>
        <Users></Users>
    </div>
    
    </>)
}