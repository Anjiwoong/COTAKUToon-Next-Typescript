import { DbUserTypes } from '../types/lib/db-user-types';

export const fetchRecentWebtoon = async (name?: string | null) => {
  const response = await fetch('http://localhost:3000/api/recent-webtoon', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message || 'Something went wrong!');

  const loginUser = data.data.find((item: DbUserTypes) => item.id === name);

  return loginUser?.recentWebtoon;
};
