import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/calendar/v3';

export const getEvents = async (accessToken: string) => {
  const response = await axios.get(`${BASE_URL}/calendars/primary/events`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data.items;
};