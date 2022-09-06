import Head from 'next/head'
import { useEffect } from 'react';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';


const Home = ({ posts }) => {
  useEffect(() => {
    return () => {
      console.log("%c Developed by Saurabh Datta","color: cyan; font-size: 22px");
      console.log("%c Look at some of my profiles:","font-family:montonic; font-size:16px");
      console.log("%c 1. LeetCode: https://leetcode.com/SaurabhDatta/","font-family:monotonic; font-size:16px");
      console.log("%c 2. GitHub: https://github.com/Saurabh-Datta/","font-family:monotonic; font-size:16px");
      console.log("%c 3. LinkedIn: https://www.linkedin.com/in/saurabhdatta22/","font-family:monotonic; font-size:16px");
      console.log("%c 4. Portfolio: https://saurabhdatta.me/","font-family:monotonic; font-size:16px");
    }
  }, [])
  
 
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Blog</title>
        <meta name="description" content="Saurabh Datta is a developer, programmer and a writer." />
        <meta name="keywords" content="Saurabh, Datta, Blog, Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post,index) => (
            <PostCard post={post.node} key={post.title}/>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}