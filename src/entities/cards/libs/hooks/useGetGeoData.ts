import { useEffect, useState } from 'react';
// api
import { fetchAddress } from '../../api/fetchGeoReverse';

export const useGetGeoData = (latitude: string, longitude: string) => {
  const [address, setAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAddress = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedAddress = await fetchAddress(latitude, longitude);
        setAddress(fetchedAddress ?? 'Unknown address');
      } catch (err) {
        setError('Failed to load address');
        setAddress(null);
      } finally {
        setLoading(false);
      }
    };

    getAddress();
  }, [latitude, longitude]);

  return { address, loading, error };
};
