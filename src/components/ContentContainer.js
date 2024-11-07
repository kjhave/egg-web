import React from 'react';
import HighlightEvent from './HighlightEvent';
import HumansOfEgg from './HumansOfEgg';
import Events from './Events';

function ContentContainer(){
    return (
        <div className="flex flex-col items-center p-5 bg-[#18191b] min-h-[960px]">
            {/* <HighlightEvent />
            <HumansOfEgg /> */}
            <Events />
        </div>
    );
}

export default ContentContainer;