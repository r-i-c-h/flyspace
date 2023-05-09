// Caching:
// ** Caching Method 1:
// export const dynamic = 'force-dynamic'
// export const revalidate = 600; // (update cache every ___ seconds)

interface Post {
  title: string;
  slug: string;
  content: string;
}

interface Props {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: Props) {
  const posts: Post[] = await fetch('http://localhost:3000/api/content')
    // ** Caching Method 2:
    //  const posts: Post[] = await fetch('http://localhost:3000/api/content', {cache:'no-cache'}) // or 'force-cache', or...
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