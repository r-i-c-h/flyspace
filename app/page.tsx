import Image from 'next/image'
import styles from './page.module.css'
import { roboto } from './fonts'



export default function Home() {
  return (
    <main className={`${styles.main} ${roboto.className}`}>
      <h1>What the?</h1>
    </main>
  )
}
