"use client"
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import { useContext } from 'react'

const Navbar = () => {
    const { user, logout }: any = useContext(AuthContext)
    const handleLogOut = () => {
        logout()
            .then((data: any) => { })
            .catch((error: any) => console.log(error.message))
    }

    return (
        <div className="flex justify-between py-14 px-24 bg-[#FFF9F9]">
            <div className="flex items-center space-x-2">
                <Image src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" width={45} height={45} alt="Picture of page" className="rounded" />
                <p className="text-2xl"><span className="font-bold text-blue-900">Moss</span><span>kot</span></p>
            </div>
            <div className="flex space-x-4 items-center">
                <Link className="text-xl font-semibold text-blue-900" href="/">Availability</Link>
                <Link className="text-xl font-semibold text-blue-900" href="/">Integration</Link>
                <Link className="text-xl font-semibold text-blue-900" href="/">Community</Link>
                {!user && <Link className="text-xl font-semibold text-blue-900" href="/login">Login</Link>}
                {user && <button onClick={handleLogOut} className="text-xl font-semibold text-blue-900">Logout</button>}
                <div className="flex justify-between items-center space-x-3">
                    <Link className="text-3xl font-semibold flex items-center" href="/"><FaBell></FaBell></Link>
                    <Image src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user-image" width={50} height={50} className="rounded-full"></Image>
                </div>
            </div>
        </div>
    );
};

export default Navbar;