// react
import { FC, useState } from 'react';
//types
import { GeneralInfo } from '../../types/cardsTypes';
//assets
import Heart from '@/shared/libs/assets/heart.svg?react';
import ArrowPrev from '@/shared/libs/assets/arrow-back.svg?react';
import ArrowNext from '@/shared/libs/assets/arrow-end.svg?react';
// styles
import styles from './CardItemImage.module.scss';

interface CardItemImageProps {
  generalInfo: GeneralInfo;
  images?: {
    large: string;
    medium: string;
    original: string;
    small: string;
  }[];
}

export const CardItemImage: FC<CardItemImageProps> = ({
  images = [],
  generalInfo
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images.length) return null;

  return (
    <div
      className={styles.CardItemImage}
      style={{ backgroundImage: `url(${images[currentImageIndex].medium})` }}
    >
      <div className={styles.image_header}>
        <div className={styles.reference}>
          {generalInfo.reference.toLocaleUpperCase()}
        </div>
        <div className={styles.like}>
          <Heart />
        </div>
      </div>
      <div className={styles.navigateImages}>
        <div className={styles.navigateButton} onClick={prevImage}>
          <ArrowPrev />
        </div>
        <div className={styles.navigateButton} onClick={nextImage}>
          <ArrowNext />
        </div>
      </div>
    </div>
  );
};
