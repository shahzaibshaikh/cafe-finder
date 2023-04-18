import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Card.module.css';

function Card({ name, imgUrl, href, alt }) {
  return (
    <Link href={href}>
      <div className={styles.cardWrapper}>
        <h2 className={styles.cardHeader}>{name}</h2>
        <Image
          className={styles.cardImage}
          src={imgUrl}
          width={260}
          height={160}
          alt={alt}
        />
      </div>
    </Link>
  );
}

export default Card;
