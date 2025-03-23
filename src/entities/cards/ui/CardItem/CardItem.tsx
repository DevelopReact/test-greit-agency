// react
import { FC } from 'react';
//hooks
import { useGetGeoData } from '../../libs/hooks/useGetGeoData';
//ui
import { CardItemImage } from '../CardItemImage/CardItemImage';
//types
import { GeneralInfo } from '../../types/cardsTypes';
//assets
import Beds from '@/shared/libs/assets/bed.svg?react';
import LocationPoint from '@/shared/libs/assets/location-point.svg?react';
import Bath from '@/shared/libs/assets/bath.svg?react';
import Square from '@/shared/libs/assets/square.svg?react';
import Line from '@/shared/libs/assets/line.svg?react';
// styles
import styles from './CardItem.module.scss';

interface CardItemProps {
  _id: string;
  generalInfo: GeneralInfo;
  images?: {
    large: string;
    medium: string;
    original: string;
    small: string;
  }[];
}

export const CardItem: FC<CardItemProps> = ({ generalInfo, images, _id }) => {
  const { address, loading, error } = useGetGeoData(
    generalInfo.coordinates.latitude,
    generalInfo.coordinates.longitude
  );

  return (
    <div className={styles.CardItem}>
      <CardItemImage key={_id} images={images} generalInfo={generalInfo} />

      <div className={styles.generalInfo}>
        <div className={styles.title}>
          <div className={styles.name}>{generalInfo.name}</div>
          <div className={styles.price}>
            ${generalInfo.price.toLocaleString('en-US')}
          </div>
        </div>
        <div className={styles.coordinates}>
          <div className={styles.local}>
            <LocationPoint />
          </div>
          {loading ? <>Loading...</> : <span>{address}</span>}
          {error ?? <>{error}</>}
        </div>
        <div className={styles.options}>
          <div className={styles.option_item}>
            <Beds />
            {generalInfo.rooms}
          </div>
          <Line />
          <div className={styles.option_item}>
            <Bath /> {generalInfo.bathrooms}
          </div>
          <Line />
          <div className={styles.option_item}>
            <Square /> {generalInfo.size} sqft
          </div>
        </div>
      </div>
    </div>
  );
};
