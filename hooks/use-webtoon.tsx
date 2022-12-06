import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import { DbUserTypes } from '../types/lib/db-user-types';

const useWebtoon = () => {
  const { data: session } = useSession();

  const { data: recent, error } = useSWR(
    `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/recent-webtoon`,
    url =>
      fetch(url).then(async res => {
        const data = await res.json();

        const loginUser = data.data.find(
          (item: DbUserTypes) => item.id === session?.user?.name
        );
        return loginUser.recentWebtoon;
      })
  );
  return {
    recent: recent,
    isLoading: !error && !recent,
    isError: error,
  };
};

export default useWebtoon;
