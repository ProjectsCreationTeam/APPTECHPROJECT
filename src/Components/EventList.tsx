import { useEffect, useState } from "react";

function EventList() {

  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {

    const storedEvents =
      JSON.parse(localStorage.getItem("events") || "[]");

    setEvents(storedEvents);

  }, []);

  return (
    <div className="event-page">

      <h1>Community Events</h1>

      <div className="event-grid">

        {events.length === 0 ? (

          <h2 style={{color:"white"}}>
            No Events Available
          </h2>

        ) : (

          events.map((event, index) => (

            <div className="event-card" key={index}>

              <h2>{event.title}</h2>

              <p>
                <strong>Organizer:</strong> {event.organizer}
              </p>

              <p>
                <strong>Date:</strong> {event.date}
              </p>

              <p>
                <strong>Venue:</strong> {event.venue}
              </p>

              <p>
                {event.description}
              </p>

            </div>

          ))
        )}

      </div>

    </div>
  );
}

export default EventList;
