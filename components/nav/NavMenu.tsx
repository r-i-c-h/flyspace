import Link from "next/link";
import Image from "next/image";
import styles from "./NavMenu.module.css";
import { SignInButton, SignOutButton } from "../Buttons";
import AuthCheck from "../AuthCheck";

export default function NavMenu() {
  return (<nav className={styles.nav}>
    <Link href={'/'}>
      <Image
        src="/logo.svg"
        width={40}
        height={40}
        alt="App Logo"
        className={styles.logo}
      />
    </Link>
    <ul className={styles.links}>
      <li>
        <Link href={'/about'}>About</Link>
      </li>
      <AuthCheck><li> <Link href={'/user-settings'}>User Settings</Link> </li></AuthCheck>
      <AuthCheck><li> <Link href={'/users'}>All Users List</Link> </li></AuthCheck>
      <li>
        <SignInButton />
      </li>
      <AuthCheck><li><SignOutButton /></li></AuthCheck>
    </ul>
  </nav>)
}