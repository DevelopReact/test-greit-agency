// react
import { FC } from 'react';
//types
import { CardFetchResponse } from '@/entities/cards/types/cardsTypes';
// styles
import styles from './Paginate.module.scss';

interface PaginateProps {
  currentPage: number;
  setCurrentPage: (update: number | ((prevPage: number) => number)) => void;
  cards: CardFetchResponse;
}

export const Paginate: FC<PaginateProps> = ({
  currentPage,
  setCurrentPage,
  cards
}) => {
  const onPrevPageClick = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage: number) => prevPage - 1);
    }
  };

  const onNextPageClick = () => {
    if (currentPage < cards?.totalPages! - 1) {
      setCurrentPage((prevPage: number) => prevPage + 1);
    }
  };

  return (
    <div className={styles.Paginate}>
      <button onClick={onPrevPageClick} disabled={currentPage === 0}>
        prev
      </button>
      <div className={styles.navigate_pagination}>
        {currentPage > 0 && (
          <>
            <div className={styles.startPage} onClick={() => setCurrentPage(0)}>
              1
            </div>
            <div className={styles.dots}>...</div>
          </>
        )}
        <div className={styles.current_page}>{currentPage + 1}</div>
        {currentPage < cards?.totalPages! - 1 && (
          <>
            <div className={styles.dots}>...</div>
            <div
              className={styles.last_page}
              onClick={() => setCurrentPage(cards?.totalPages! - 1)}
            >
              {cards?.totalPages!}
            </div>
          </>
        )}
      </div>
      <button
        onClick={onNextPageClick}
        disabled={currentPage === cards?.totalPages! - 1}
      >
        next
      </button>
    </div>
  );
};
