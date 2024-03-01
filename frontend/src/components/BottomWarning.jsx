import { Link } from "react-router-dom";

export function BottomWarning({warningMessage,linkTo,link}){
    return(<>
        <div className=" text-sm py-1 pb-4 flex justify-center text-black">
            <div>{warningMessage}</div>
            <Link className="pointer underline pl-1 cursor-pointer" to={link}>{linkTo}</Link>
            
        </div>
    
    </>)
}