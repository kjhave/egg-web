import React from 'react';
import eggIcon from '../assets/eggIcon.jpg';
import HeaderNav from './HeaderNav';
	
function Header( {navList} ) {
	return (
		<header className="fixed z-50 top-0 w-full border-b-2 border-[#46484b]">
			<div className="flex justify-between items-center h-14 px-4 bg-[#242527]">
				<img src={eggIcon} alt='EGG' className='w-12 h-12 rounded-full' />
				<nav className="flex">
					{navList.map( navItem => <HeaderNav title={navItem.title} callback={navItem.scrollFunction} /> )}
				</nav>
				<button className="px-4 py-2 border-2 border-black bg-white cursor-pointer">Đăng nhập</button>
			</div>
		</header>
	);
}

export default Header;

