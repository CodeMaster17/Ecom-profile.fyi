import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="/logo.png" alt="logo" className='w-12 h-12' />
        <span className="ml-3 text-[1.5rem]">Nexus</span>
    </Link>
);

export default Logo;
