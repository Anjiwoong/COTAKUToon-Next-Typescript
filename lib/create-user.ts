export const createUser = async (
  id?: string,
  password?: string,
  email?: string,
  adult?: boolean | string,
  recentWebtoon?: []
) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ id, password, email, adult, recentWebtoon }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) throw new Error(data.message || 'Something went wrong!');

  return data;
};
