import { CardFetchResponse } from '../types/cardsTypes';

export const fetchCards = async (
  page: number,
  size: number
): Promise<CardFetchResponse> => {
  try {
    const response = await fetch(
      `https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects?accessKey=A7gjfjj0WdBynt8d&secretKey=tGH5UlZcgNtAPrfq9MnmMhWji9j5vYXn&isPagination=true&size=${size}&page=${page}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      }
    );

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching address:', error);
    throw error;
  }
};
