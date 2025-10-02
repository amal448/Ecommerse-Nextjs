"use client"
import * as React from "react"
import { LogOut, Moon, Settings, User, Sun } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger,useSidebar } from "./ui/sidebar"





const Navbar = () => {
    const { setTheme } = useTheme()
    const {toggleSidebar}=useSidebar()
    return (
        <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
            {/* LEFT */}
            <SidebarTrigger />
            {/* can also trigger with custom button */}
            {/* <Button variant={"outline"} onClick={toggleSidebar}>
                Custom Button
            </Button> */}
            {/* RIGHTT */}
            <div className="flex items-center gap-4">
                <Link href=''>Dashboard</Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                {/* PROFILE DROPDOWN */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10} className="w-56" align="start">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>

                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Profile
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Settings
                        </DropdownMenuItem>

                        <DropdownMenuItem variant={"destructive"} >
                            <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default Navbar