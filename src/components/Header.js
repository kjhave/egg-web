import React from 'react';

function Header() {
	return (
		<header className="flex justify-between items-center p-5 border-b-2 border-black">
			<nav className="flex gap-5">
				<a href="#about" className="text-black">About EGG</a>
				<a href="#info" className="text-black">Thông tin, sự kiện</a>
				<a href="#register" className="text-black">Gửi đăng ký</a>
			</nav>
			<button className="px-4 py-2 border-2 border-black bg-white cursor-pointer">Profile</button>
		</header>
	);
}

export default Header;

