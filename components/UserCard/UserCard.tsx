import Link from 'next/link';
import Image from 'next/image';

import styles from './UserCard.module.css';

interface CardProps {
  id: string;
  name: string | null;
  age: number | "🤷‍♂️?" | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: CardProps) {
  const cardAge = age ?? "🤷‍♂️?";

  return (
    <Link href={`/users/${id}`}>
      <div className={styles.card}>
        <Image
          src={image ?? `/mystery-avatar.svg`}
          alt={`${name}'s Profile Pic`}
          width={150}
          height={120}
          className={styles.card_image}
        />
        <div className={styles.card_content}>
          <h3> {name} </h3>
          <p>Age: {cardAge}</p>
        </div>
      </div>
    </Link>
  );
}
