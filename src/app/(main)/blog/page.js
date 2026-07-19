import React from 'react'
import BlogCard from './BlogCard.js';
import HighlightedBlogs from '../insights/highlightedBlogs.jsx';
import Splash from '@/components/splash.js';
import BlogsAndNews from './blogsAndNews.js';



const Blogs
 = async ({ searchParams }) => {
    const token = process.env.NEXT_PUBLIC_TOKEN;

    let { type } = await searchParams;

    type == 'news' ? type='News' : type='Blogs';

    if (!token) {
        throw new Error('Token not found!');
    }

    const blog = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?populate=*`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        cache: "no-cache"
    });

    if (!blog.ok) {
        throw new Error(`Failed to fetch data: ${blog.status} ${blog.statusText}`);
    }

    const blogs = await blog.json();
    const blogs_data = blogs.data;

    const article = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        cache: "no-cache"
    });

    if (!article.ok) {
        throw new Error(`Failed to fetch data: ${article.status} ${article.statusText}`);
    }

    const articles = await article.json();
    const articles_data = articles.data;;

  return (
    <div className='pt-20 flex flex-col justify-center items-center w-full bg-white'>
        <Splash title={"Blogs & News"} subtitle={"All Things CSD – News Updates and Expert Blogs"}/>
        <BlogsAndNews blogs={blogs_data} articles={articles_data} init_type={type}/>
    </div>
  )
}

export default Blogs;
