'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { blogData as defaultBlogs } from '@/app/lib/data'; 

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const allBlogs = [...storedBlogs, ...defaultBlogs];
    setBlogs(allBlogs);
  }, []);

  return (
    <main className="card-container" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      padding: '2rem',
    }}>
      <h2 className="heading" style={{ gridColumn: '1 / -1' }}>All Blogs</h2>
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="card" style={{
            border: '1px solid #ddd',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'center',
            backgroundColor: '#fff',
          }}>
            <img 
              src={blog.image} 
              alt={blog.title} 
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }} 
            />
            <h3 className="card-title" style={{ marginTop: '1rem' }}>
              <Link href={`/blog/${blog.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                {blog.title}
              </Link>
            </h3>
          </div>
        ))
      )}
    </main>
  );
}
