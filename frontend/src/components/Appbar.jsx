import { Avatar } from "./Avatar";

export function Appbar({appName,username}){
    return (<>
        <div className="p-1 flex justify-between border-t-2 border-t-black border-b-2">
            <div className="font-bold">{appName}</div>
            
        <Avatar username={username}></Avatar>

        </div>
        
    </>)
}