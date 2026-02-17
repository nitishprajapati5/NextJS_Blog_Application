import { Loader2 } from "lucide-react";

export default function Loading(){
    return (
        <div className="flex flex-col min-h-screen justify-center items-center">
            <Loader2 className="animate-spin " size={24}/>
            <p>Loading your Blog.....</p>
        </div>
    )
}