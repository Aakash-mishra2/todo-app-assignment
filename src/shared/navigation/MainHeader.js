import React from 'react';

const MainHeader = props => {
    return <header 
    className="w-full absolute top-0 left-0 bg-[#213555] h-16 flex md:justify-between  items-center pl-4 pr-4 shadow-md z-5"
    >
    {props.children}
    </header>;
};

export default MainHeader;