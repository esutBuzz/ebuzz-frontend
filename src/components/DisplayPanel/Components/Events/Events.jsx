import styled from "styled-components";
import event1 from '/images/event1.png';
import event2 from '/images/event2.png';
import event3 from '/images/event3.png';
import event4 from '/images/event4.png';
import event5 from '/images/event5.png';
import './events.scss';

const EventsDisplay = styled.main`
    position: relative;
    width: 100%;
    height: 100%;
    padding:1em;
`
const eventData = [
    {
      image: event1,
      header:'Udi LGA students association meeting',
      location:'Hall B',
      date:'24th august 2023.',
    },
    {
      image: event2,
      header:'NUESA esut chapter meeting',
      location:'School auditorium',
      date:'24th august 2023.',
    },
    {
      image: event3,
      header:'Faculty of education debate',
      location:'Different for each faculty',
      date:'24th august 2023.',
    },
    {
      image:event4,
      header:'Exam commencement',
      location:'In front of diamond hostel',
      date:'24th august 2023.',
    },
    {
      image:event5,
      header:'Engineering dinner party',
      location:'Engineering faculty',
      date:'24th august 2023.',
    }

]
const displayEvent = eventData.map((data)=>{
    return(
        <div id="main_event_body">
          <div>
            <img src={data.image} alt="event_image" />
          </div>
          <div id="event_text">
            <h4>{data.header}</h4>
            <p>{data.location}</p>
            <p><span>{data.date}</span></p>
          </div>
        </div>
    )
})
export default function Events() {
  return (
    <EventsDisplay>
       <section id="event_container">
          <div id="event_header">
            <h3>
              Events
            </h3>
          </div>
          <div id="event_body">
            {displayEvent}
          </div>
       </section>
    </EventsDisplay>
  )
}
