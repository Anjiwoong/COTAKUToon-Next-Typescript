import { DataTypes } from '../../../types/common/webtoon-types';

import AuthorIntroduce from './AuthorIntroduce';
import BookIntroduce from './BookIntroduce';

const WebtoonIntroduce = ({ id, cover }: DataTypes) => {
  return (
    <>
      <BookIntroduce />
      <AuthorIntroduce id={id} cover={cover} />
    </>
  );
};

export default WebtoonIntroduce;
