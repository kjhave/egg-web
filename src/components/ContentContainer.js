import React from 'react';
import HighlightEvent from './HighlightEvent';
import HumansOfEgg from './HumansOfEgg';

function ContentContainer(){
    return (
        <div className="flex flex-col items-center gap-5 p-5 bg-[#18191b]">
            <HighlightEvent />
            <HumansOfEgg />
        </div>
    );
}

export default ContentContainer;