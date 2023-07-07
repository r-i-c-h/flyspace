import Image from 'next/image'
import styles from './page.module.css'
import { roboto } from './fonts'



export default function Home() {
  return (
    <div className={`${roboto.className}`}>
      <h1>Welcome to FLY-space</h1>
      <h2>The mostest FLYist space place to be social</h2>
    </div>
  )
}
