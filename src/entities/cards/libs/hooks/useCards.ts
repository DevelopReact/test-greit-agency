import { useState, useEffect } from 'react';
//api
import { fetchCards } from '../../api/fetchCardsApi';
//types
import { CardFetchResponse } from '../../types/cardsTypes';

export const useCards = (page: number, size: number) => {
  const [cards, setCards] = useState<CardFetchResponse | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCards(page, size);
        setCards(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    getCards();
  }, [page, size]);

  return { cards, loading, error };
};
