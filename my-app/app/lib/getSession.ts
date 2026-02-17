import jwt, { JwtPayload } from "jsonwebtoken"
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_TOKEN!;

export interface SessionUser {
    id:string;
    name:string
}

export function jsonWebTokenGeneration(id:string,name:string){
    return jwt.sign({id,name},process.env.JWT_TOKEN as string,{expiresIn:
        "1d"
    });
}

export async function getSession(): Promise<SessionUser | null>{
	const cookieStore = await cookies();

    const token = cookieStore.get('access_token')?.value;

    if(!token){
        return null;
    }

    try {
        const decoded = jwt.verify(token,JWT_SECRET) as JwtPayload & SessionUser

        if(!decoded.exp){
            return null;
        }

        const isExpired = Date.now() >= decoded.exp * 1000;

        if(isExpired){
            return null;
        }

        return decoded;
    } catch (error) {
        return null
    }
}