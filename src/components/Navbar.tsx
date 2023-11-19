import Link from "next/link";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex justify-between py-14 px-24 bg-[#FFF9F9]">
            <div className="flex justify-around">
                <p>Image</p>
                <p>Title</p>
            </div>
            <div className="flex space-x-4">
                <Link href="/">Availability</Link>
                <Link href="/">Integration</Link>
                <Link href="/">Community</Link>
                <div className="flex justify-between space-x-3">
                    <Link href="/"><FaBell></FaBell></Link>
                    <Link href="/">image</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;