'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateBlogPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(''); 
  const router = useRouter();

  const handleCreate = () => {
    if (!title || !description || !image) {
      alert('Please fill in all fields');
      return;
    }

    const newBlog = {
      id: Date.now().toString(),
      title,
      description,
      image, 
    };

    const existingBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const updatedBlogs = [newBlog, ...existingBlogs];
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    alert('Blog created successfully!');
    router.push('/admin/list');
  };

  return (
    <main className="container" style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
      <h2 className="heading">Create New Blog</h2>
      
      <input
        className="input"
        type="text"
        placeholder="Enter blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: '1rem', width: '100%', padding: '10px' }}
      />

      <textarea
        className="input"
        rows={5}
        placeholder="Enter blog description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginBottom: '1rem', width: '100%', padding: '10px' }}
      />

      <input
        className="input"
        type="text"
        placeholder="Enter image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={{ marginBottom: '1rem', width: '100%', padding: '10px' }}
      />

      <button 
        className="button" 
        onClick={handleCreate}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Create Blog
      </button>
    </main>
  );
}
