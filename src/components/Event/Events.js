import React from 'react';
import EventSection from './EventSection';
import __imgUrl from '../../assets/eggIcon.jpg';

const EventsList = [
    {
        id: 0,
        title: 'Deadline Contest Web 1',
        img: <img src={__imgUrl} alt='' />,
        time: '00:00',
        date: '16/11/2024'
    },
    {
        id: 1,
        title: 'Deadline Contest Web 2 ',
        img: <img src={__imgUrl} alt='' />,
        time: '00:00',
        date: '16/11/2024'
    },
    {
        id: 2,
        title: 'Deadline Contest Web 3 ',
        img: <img src={__imgUrl} alt='' />,
        time: '00:00',
        date: '16/11/2024'
    },
    {
        id: 3,
        title: 'Deadline Contest Web 4',
        img: <img src={__imgUrl} alt='' />,
        time: '00:00',
        date: '16/11/2024'
    },
    {
        id: 4,
        title: 'Deadline Contest Web 5',
        img: <img src={__imgUrl} alt='' />,
        time: '00:00',
        date: '16/11/2024'
    },
    {
        id: 5,
        title: 'Deadline Contest Web 6',
        img: <img src={__imgUrl} alt='' />,
        time: '00:00',
        date: '16/11/2024'
    },
    {
        id: 6,
        title: 'Deadline Contest Web 7',
        img: <img src={__imgUrl} alt='' />,
        time: '00:00',
        date: '16/11/2024'
    },
    {
        id: 7,
        title: 'Deadline Contest Web 8',
        img: <img src={__imgUrl} alt='' />,
        time: '00:00',
        date: '16/11/2024'
    }
];

function Events( {eventRef} ){
    return(
        <div ref={eventRef}>
            <EventSection title='Sự kiện'   eventList={EventsList}   />
        </div>
    )
}

export default Events;