'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { blogData as defaultBlogs } from '@/app/lib/data'; 

export default function BlogDetailPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const allBlogs = [...storedBlogs, ...defaultBlogs];
    const found = allBlogs.find((b) => b.id === params.id);
    setBlog(found);
  }, [params.id]);

  if (!blog) {
    return <p>Loading blog...</p>;
  }

  return (
    <main className="container" style={{ textAlign: 'center', padding: '2rem' }}>
      <h2 className="heading">{blog.title}</h2>
      <img 
        src={blog.image} 
        alt={blog.title} 
        style={{ maxWidth: '100%', height: 'auto', margin: '20px 0', borderRadius: '10px' }} 
      />
      <p>{blog.description}</p>
    </main>
  );
}
