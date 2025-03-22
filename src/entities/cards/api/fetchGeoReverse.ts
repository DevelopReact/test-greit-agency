export const fetchAddress = async (
  latitude: string,
  longitude: string
): Promise<string | null> => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${Number(
    latitude
  )}&lon=${Number(longitude)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.display_name || null;
  } catch (error) {
    console.error('Error fetching  address:', error);
    return null;
  }
};
