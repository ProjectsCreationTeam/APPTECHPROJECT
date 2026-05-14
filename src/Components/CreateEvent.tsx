import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface EventItem {
  organizer: string;
  title: string;
  date: string;
  venue: string;
  description: string;
}

interface CreateEventProps {
  addEvent: (e: EventItem) => void;
}

function CreateEvent({ addEvent }: CreateEventProps) {
  const navigate = useNavigate();
  const [form, setForm] = useState<EventItem>({ 
    organizer: '', 
    title: '', 
    date: '', 
    venue: '', 
    description: '' 
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 1. Send the data to your Express backend
      const response = await fetch('http://localhost:5000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form), // Convert the form state to a JSON string
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data.message);
        
        // 2. Update local React state (optional, if you still need it)
        addEvent(form); 
        
        // 3. Navigate away
        navigate('/events');
      } else {
        console.error('Failed to save event to the database');
      }
    } catch (error) {
      console.error('Error connecting to the server:', error);
    }
  };

  return (
    <div className="glass-card">
      <h2>Create Community Event</h2>
      <form className="sdg-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Organizer Name</label>
          <input required onChange={e => setForm({...form, organizer: e.target.value})} />
        </div>
        <div className="input-group">
          <label>Event Title</label>
          <input required onChange={e => setForm({...form, title: e.target.value})} />
        </div>
        <div className="input-group">
          <label>Date</label>
          <input type="date" required onChange={e => setForm({...form, date: e.target.value})} />
        </div>
        <div className="input-group">
          <label>Venue</label>
          <input required onChange={e => setForm({...form, venue: e.target.value})} />
        </div>
        <div className="input-group">
          <label>Description</label>
          <textarea required onChange={e => setForm({...form, description: e.target.value})} />
        </div>
        <button type="submit" className="btn-primary">Submit Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;
