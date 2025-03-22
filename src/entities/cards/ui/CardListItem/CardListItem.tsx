// react
import { FC } from 'react';
//ui
import { CardItem } from '../CardItem/CardItem';
//types
import { Card } from '../../types/cardsTypes';
// styles
import styles from './CardListItem.module.scss';

interface CardListItemProps {
  projects: Card[];
}

export const CardListItem: FC<CardListItemProps> = ({ projects }) => {
  return (
    <div className={styles.CardListItem}>
      {projects?.map(({ _id, generalInfo, images }) => {
        return (
          <CardItem
            _id={_id}
            key={_id}
            generalInfo={generalInfo}
            images={images}
          />
        );
      })}
    </div>
  );
};
