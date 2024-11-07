import React from 'react';
import EventSection from './EventSection';

function Events(){
    return(
        <>
            <EventSection title='Sự kiện sắp diễn ra' />
            <EventSection title='Sự kiện đang diễn ra' />
            <EventSection title='Sự kiện đã diễn ra' />
        </>
    )
}

export default Events;