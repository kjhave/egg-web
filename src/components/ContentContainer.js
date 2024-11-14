import React from 'react';

function ContentContainer({ children }) {
	return (
		<div className="flex flex-wrap justify-center content-start gap-y-8 py-8 mt-14 bg-[#18191b] min-h-[960px]">
			{children}
		</div>
	);
}

export default ContentContainer;
