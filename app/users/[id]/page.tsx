import { prisma } from "@/lib/prisma"
import { Metadata } from "next"
import Image from 'next/image';

import styles from './page.module.css';

interface Props {
  params: {
    id: string;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } })

  if (user) { return { title: `${user.name}'s Profile` } }
  return { title: `Loading` } // @TS-protection
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  const { name, bio, image } = user ?? {};

  let bioText = bio;
  if (!bio || bio.length < 1) {
    bioText = '[Sorry - It looks like this user does not have a system bio]'
  }

  return (
    <div className={styles.user_wrapper}>
      <h1>{name}</h1>
      <Image
        src={image ?? '/mystery-avatar.svg'}
        className={styles.user_img}
        width={250}
        height={250}
        alt={`${name}'s profile`}
      />

      <h3>Bio:</h3>
      <p>{bioText}</p>
    </div>
  );
}