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
      <li>
        <Link href={'/foo'}>Foo</Link>
      </li>
      <li>
        <Link href={'/bar'}>Bar</Link>
      </li>
      <li>
        <SignInButton />
      </li>
      <AuthCheck><li><SignOutButton /></li></AuthCheck>
    </ul>
  </nav>)
}