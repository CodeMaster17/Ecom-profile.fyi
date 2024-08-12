import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks: React.FC = () => (
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-[1.5rem] justify-center">
        <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
        <Link to="/" className="mr-5 hover:text-gray-900">Products</Link>
    </nav>
);

export default NavLinks;
