import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import NavButton from './NavButton';


const Header: React.FC = () => (
    <header className="text-gray-600 body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
            <Logo />
            <NavLinks />
            <NavButton />
        </div>
    </header>
);

export default Header;
