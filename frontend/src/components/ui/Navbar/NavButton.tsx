import React from 'react';
const ButtonComponent: React.FC = () => {
    return (
        <button className="custom-button">
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span className="circle3"></span>
            <span className="circle4"></span>
            <span className="circle5"></span>
            <span className="text">Login</span>
        </button>
    );
};

export default ButtonComponent;
