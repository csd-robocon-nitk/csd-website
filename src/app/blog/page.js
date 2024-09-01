import React from 'react'
import BlogCard from './BlogCard.js';

const Blogs
 = async () => {

    const token = process.env.NEXT_PUBLIC_TOKEN;
    if (!token) {
        throw new Error('Token not found!');
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?populate=*`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        cache: "no-cache"
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    const blogs = await res.json();
    const blogs_data = blogs.data;


  return (
    <div className='pt-20 p-10 gap-8 flex flex-col justify-center items-center w-full'>
        <div className='font-bold pt-5 text-5xl m-5'>CSD's Blogs</div>
        <div className='flex flex-col w-full flex-wrap justify-center items-center gap-8'>
            {
                blogs_data.map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                    
                ))
            }
        </div>
    </div>
  )
}

export default Blogs;
