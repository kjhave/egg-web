import React from 'react';
import eggIcon from '../assets/eggIcon.jpg';
import HeaderNav from './HeaderNav';

function Header() {
	return (
		<header className="flex justify-between items-center z-10 h-14 px-4 bg-[#242527] border-b-2 border-[#46484b]">
			<img src={eggIcon} alt='EGG' className='w-12 h-12 rounded-full' />
			<nav className="flex">
				<HeaderNav title='About EGG'></HeaderNav>
				<HeaderNav title='Thông tin, sự kiện'></HeaderNav>
				<HeaderNav title='Humans of EGG'></HeaderNav>
			</nav>
			<button className="px-4 py-2 border-2 border-black bg-white cursor-pointer">Đăng nhập</button>
		</header>
	);
}

export default Header;

