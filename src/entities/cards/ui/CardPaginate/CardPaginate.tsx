// react
import { FC, useState } from 'react';
//hooks
import { useCards } from '../../libs/hooks/useCards';
//ui
import { CardListItem } from '../CardListItem/CardListItem';
import { Error } from '@/shared/ui/Error/Error';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Paginate } from '@/shared/ui/Paginate/Paginate';
// styles
import styles from './CardPaginate.module.scss';

interface CardPaginateProps {}

export const CardPaginate: FC<CardPaginateProps> = ({}) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { cards, loading, error } = useCards(currentPage, 30);

  if (loading) return <Loader />;

  if (error)
    return (
      <div>
        <Error error={error} />
      </div>
    );

  return (
    <div className={styles.CardPaginate}>
      <Paginate
        cards={cards!}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <CardListItem projects={cards?.projects!} />
      <Paginate
        cards={cards!}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
