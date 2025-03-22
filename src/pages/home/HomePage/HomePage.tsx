// react
import { FC } from 'react';
//ui
import { CardPaginate } from '@/entities/cards/ui/CardPaginate/CardPaginate';
// styles
import styles from './HomePage.module.scss';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className={styles.HomePage}>
      <CardPaginate />
    </div>
  );
};
