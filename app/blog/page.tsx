import Link from 'next/link';
import styles from './page.module.css';

export default async function Blog() {
  const posts = await fetch('http://localhost:3000/api/content').then((res) =>
    res.json()
  );
  return (
    <div>
      <h1>[Dynamic] Blog Posts</h1>
      <ul className={styles.blogs_ul}>
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}><h2>&quot;{post.title}&quot;</h2></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}