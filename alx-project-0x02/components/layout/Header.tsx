/** next/link component enables client-side 
 * navigation between pages. */
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4  flex gap-6">
            <link href="/">Welcome</link>
            <link href="/home">Home</link>
            <link href="/about">About</link>
        </header>
    );
};

export default Header;