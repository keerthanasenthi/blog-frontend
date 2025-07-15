'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { blogData as defaultBlogs } from '@/app/lib/data'; 

export default function AdminBlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const allBlogs = [...storedBlogs, ...defaultBlogs];

    const uniqueBlogs = allBlogs.filter(
      (blog, index, self) => index === self.findIndex(b => b.id === blog.id)
    );

    setBlogs(uniqueBlogs);
  }, []);

  const handleDelete = (id) => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const updatedStoredBlogs = storedBlogs.filter(blog => blog.id !== id);
    localStorage.setItem('blogs', JSON.stringify(updatedStoredBlogs));

    const updatedList = [...updatedStoredBlogs, ...defaultBlogs].filter(
      (blog, index, self) => index === self.findIndex(b => b.id === blog.id)
    );

    setBlogs(updatedList);
  };

  const handleEdit = (id) => {
    router.push(`/admin/list/${id}`);
  };

  return (
    <main className="card-container">
      <h2 className="heading" style={{ gridColumn: '1 / -1' }}>Admin Blog List</h2>

      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="card">
            <img 
              src={blog.image} 
              alt={blog.title} 
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3 className="card-title">
              <Link href={`/admin/list/${blog.id}`}>{blog.title}</Link>
            </h3>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '1rem' }}>
              <button className="button" onClick={() => handleEdit(blog.id)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDelete(blog.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </main>
  );
}
