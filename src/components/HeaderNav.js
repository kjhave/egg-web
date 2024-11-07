import React from 'react';

function HeaderNav( { title, handleClick } ){
    return(
        <a href="#" className="text-[#b1b2b6] uppercase hover:cursor-pointer h-12 leading-[48px] px-8" onClick={handleClick}>{title}</a>
    )
}

export default HeaderNav;