"use client"
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { FaBell, FaThList } from "react-icons/fa";
import { useContext, useState } from 'react'
import logoImage from '../../public/logo.jpg'

const Navbar = () => {
    const { user, logout }: any = useContext(AuthContext)
    const [toggle, setToggle] = useState(false);

    const handleLogOut = () => {
        logout()
            .then((data: any) => { })
            .catch((error: any) => console.log(error.message))
    }

    return (
        <div className="bg-[#FFF9F9]">
            <div className="hidden md:flex justify-between py-14 px-10 lg:px-24 ">
                <div className="flex items-center space-x-2">
                    <Image src={logoImage} width={50} height={50} alt="Picture of page" className="rounded" />
                    <p className="text-2xl"><span className="font-bold text-blue-900">Moss</span><span>kot</span><sup>TM</sup></p>
                </div>
                <div className="flex space-x-1 md:space-x-2 lg:space-x-4 items-center">
                    <Link className="Nav-link" href="/">Availability</Link>
                    <Link className="Nav-link" href="/">Integration</Link>
                    <Link className="Nav-link" href="/">Community</Link>
                    {!user && <Link className="Nav-link" href="/login">Login</Link>}
                    {user && <button onClick={handleLogOut} className="text-xl font-semibold text-blue-900">Logout</button>}
                    <div className="flex justify-between items-center space-x-3">
                        <Link className="text-3xl font-semibold flex items-center" href="/"><FaBell></FaBell></Link>
                        <Image src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user-image" width={50} height={50} className="rounded-full"></Image>
                    </div>
                </div>
            </div>
            {/* nav for small device  */}
            <div className="block px-10 py-6 md:hidden">
                <button onClick={() => setToggle(!toggle)}><FaThList className="text-2xl"></FaThList>.</button>
            </div>
            {
                toggle && <div className="relative">
                    <div className="absolute left-0 bg-[#FFF9F9] px-4 rounded-br-lg">
                        <Link className="text-lg font-semibold text-blue-900" href="/">Availability</Link><br />
                        <Link className="text-lg font-semibold text-blue-900" href="/">Integration</Link><br />
                        <Link className="text-lg font-semibold text-blue-900" href="/">Community</Link><br />
                        {!user && <Link className="text-lg font-semibold text-blue-900" href="/login">Login</Link>}
                        {user && <button onClick={handleLogOut} className="text-lg font-semibold text-blue-900">Logout</button>}
                    </div>
                </div>
            }
        </div>
    );
};

export default Navbar;