import { Metadata } from "next";
import styles from './page.module.css';

export const dynamic = 'force-static'; // <~~ Not actually necessary

export const metadata: Metadata = {
  title: 'About the Fly Place',
  description: 'So Fly. So So SO Fly. Wickidifreshness...'
}


export default async function About() {

  return (<>
    <div className="container">
      <h1>So About that <em>About</em> now....</h1>
      <p>Here is some <span className={styles.custom}>static</span> content that is unchanging.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sed non officiis libero reprehenderit numquam ratione, fugiat quis laborum architecto harum officia placeat iste autem ipsam voluptate nemo pariatur quibusdam.
        Exercitationem, voluptas accusantium? Cum dolorum sint minima maiores dicta a consequatur error, odio animi laboriosam quia sapiente ipsam, distinctio, quasi rem numquam sequi eaque explicabo voluptates corrupti ratione. Neque, eligendi.</p>
    </div>
  </>)

}