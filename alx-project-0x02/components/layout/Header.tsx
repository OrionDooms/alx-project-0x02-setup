/** next/link component enables client-side 
 * navigation between pages. */
import Link from "next/link";
import React from "react";


const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4  flex gap-6">
            <nav className="flex gap-4 text-lg">
            <Link href="/home" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/posts" className="hover:underline">Posts</Link>
            </nav>
        </header>
    );
};

export default Header;