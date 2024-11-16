import React from 'react';
import { Link } from 'react-router-dom';

// HeaderNav component
// @param {string} title - The title of the navigation
// @param {string} url - The URL of the navigation. Provide `#` if you don't want to redirect
// @param {function|null} callback - The callback function when the navigation is clicked
function HeaderNav({ title, url, callback }) {
	if (callback && typeof (callback) === 'function') {
		return (
			<button className="text-[#b1b2b6] uppercase hover:cursor-pointer h-12 leading-[48px] px-8" onClick={callback}>{title}</button>
		)
	}
	return (
		<Link to={url} className="text-[#b1b2b6] uppercase hover:cursor-pointer h-12 leading-[48px] px-8">{title}</Link>
	)
}

export default HeaderNav;
