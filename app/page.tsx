import Image from 'next/image'
import styles from './page.module.css'
import { roboto } from './fonts'



export default function Home() {
  return (
    <main className={`${roboto.className}`}>
      <h1>What the?</h1>
      <h2>The mostest FLYist space place to be social</h2>
    </main>
  )
}
