import React from 'react';

function HeaderNav( { ref, title } ){
    return(
        <a href={ref} className="text-[#b1b2b6] uppercase hover:cursor-pointer h-12 leading-[48px] px-4">{title}</a>
    )
}

export default HeaderNav;