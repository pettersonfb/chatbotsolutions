import React, { useEffect, useState } from 'react';
import { getEvents } from '../api/googleCalendarApi';
import { useAuth } from '../hooks/useAuth';

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const { logout } = useAuth();

  useEffect(() => {
    const fetchEvents = async () => {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const accessToken = params.get('access_token');

      if (accessToken) {
        const events = await getEvents(accessToken);
        setEvents(events);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="calendar-page">
      <h1>Google Calendar Events</h1>
      <button onClick={logout}>Logout</button>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.summary}</strong> - {event.start.dateTime || event.start.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;