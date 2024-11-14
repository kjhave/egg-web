import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNav({ title, url }) {
	return (
		<Link to={url} className="text-[#b1b2b6] uppercase hover:cursor-pointer h-12 leading-[48px] px-8">{title}</Link>
	)
}

export default HeaderNav;
