
import React, { useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {

  const navigate = useNavigate();

  const [event, setEvent] = useState({

    eventName: '',
    location: '',
    date: '',
    organizer: '',
    description: ''

  });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      // SAVE EVENT
      await axios.post(
        'http://localhost:5000/api/events',
        event
      );

      // SEND EMAIL
      await emailjs.send(

        'service_e761yci',
        'template_xaeuqza',

        {
          event_name: event.eventName,
          organizer_name: event.organizer,
          to_email: '20255221@s.ubaguio.edu'
        },

        'feahIeQ5KRf17OGTk'

      );

      alert(
        "Event Created Successfully!"
      );

      navigate('/');

    } catch (error) {

      console.error(error);

    }
  };

  return (

    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2 className="text-primary mb-4">
          Create Community Event
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label>
              Event Name
            </label>

            <input
              type="text"
              className="form-control"
              required
              onChange={(e) =>
                setEvent({
                  ...event,
                  eventName: e.target.value
                })
              }
            />

          </div>

          <div className="mb-3">

            <label>
              Location
            </label>

            <input
              type="text"
              className="form-control"
              required
              onChange={(e) =>
                setEvent({
                  ...event,
                  location: e.target.value
                })
              }
            />

          </div>

          <div className="mb-3">

            <label>
              Date
            </label>

            <input
              type="date"
              className="form-control"
              required
              onChange={(e) =>
                setEvent({
                  ...event,
                  date: e.target.value
                })
              }
            />

          </div>

          <div className="mb-3">

            <label>
              Organizer
            </label>

            <input
              type="text"
              className="form-control"
              required
              onChange={(e) =>
                setEvent({
                  ...event,
                  organizer: e.target.value
                })
              }
            />

          </div>

          <div className="mb-3">

            <label>
              Description
            </label>

            <textarea
              className="form-control"
              required
              rows={4}
              onChange={(e) =>
                setEvent({
                  ...event,
                  description: e.target.value
                })
              }
            />

          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Publish Event
          </button>

        </form>

      </div>

    </div>

  );
};

export default CreateEvent;
