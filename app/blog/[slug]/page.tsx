// Caching:
// ** Caching Method 1:
// export const dynamic = 'force-dynamic'
// export const revalidate = 600; // (update cache every ___ seconds)
export const revalidate = 1200; // not necessary, just for ISR (Incremental Static Generation) Example


interface Post {
  title: string;
  slug: string;
  content: string;
}

// SSR/ISR GENERATION: use `generateStaticParams` to return an object with the
// parameters we want to render in advance
// Good for dynamic data that doesn't change very often.
export async function generateStaticParams() {
  const posts: Post[] = await fetch('http://flyspace.vercel.app/api/content')
    .then(res => res.json())
  //! .catch()

  return posts.map((post) => ({
    slug: post.slug
  }))
}


interface Props {
  params: { slug: string }
}
export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch('http://flyspace.vercel.app/api/content')
    // ** Caching Method 2:
    //  const posts: Post[] = await fetch('http://flyspace.vercel.app/api/content', {cache:'no-cache'}) // or 'force-cache', or...
    .then(res => res.json())
  //! .catch()

  const post = posts.find((post) => post.slug === params.slug)

  if (!post) { return (<div><h1>{`I'm sorry Dave, I'm afraid I can't do that...`}</h1></div>) }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}