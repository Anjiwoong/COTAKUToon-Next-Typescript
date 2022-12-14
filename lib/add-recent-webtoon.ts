export const addRecentWebtoon = async (
  userId?: string | null,
  id?: string,
  title?: string,
  cover?: string,
  author?: string,
  freeEpisode?: number,
  rating?: number,
  views?: string,
  category?: string[]
) => {
  const response = await fetch('/api/recent-webtoon', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      id,
      title,
      cover,
      author,
      freeEpisode,
      rating,
      views,
      category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message || 'Something went wrong!');

  return data;
};
