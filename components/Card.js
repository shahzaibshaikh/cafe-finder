import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Card({ name, imgUrl, href }) {
  return (
    <Link href={href}>
      <a>
        <h2>{name}</h2>
        <Image src={imgUrl} width={260} height={160} />
      </a>
    </Link>
  );
}

export default Card;
