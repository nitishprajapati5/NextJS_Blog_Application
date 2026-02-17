"use client"

import { useEffect } from "react"
import { useThemeStore } from "../themeStore"

export default function ThemeProvider({children}:{children:React.ReactNode}){
    const theme = useThemeStore((state) => state.theme)

    useEffect(() => {
        const root = document.documentElement;

        console.log("theme",theme)

        if(theme === "dark"){
            root.classList.add("dark");
        }else{
            root.classList.add("dark");
        }
    },[theme])

    return <>{children}</>
}