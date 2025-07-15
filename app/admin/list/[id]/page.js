'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { blogData as defaultBlogs } from '@/app/lib/data';

export default function AdminEditBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const fromStorage = storedBlogs.find((b) => b.id === id);
    const fromDefault = defaultBlogs.find((b) => b.id === id);

    const found = fromStorage || fromDefault;

    if (found) {
      setBlog(found);
      setTitle(found.title);
      setDescription(found.description);
      setImage(found.image || '');
    }
  }, [id]);

  const handleUpdate = () => {
    if (!title || !description || !image) {
      alert('Please fill all fields');
      return;
    }

    const updated = {
      id,
      title,
      description,
      image,
    };

    let storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');

    const existsIndex = storedBlogs.findIndex((b) => b.id === id);

    if (existsIndex !== -1) {
      storedBlogs[existsIndex] = updated;
    } else {
      storedBlogs = [updated, ...storedBlogs];
    }

    localStorage.setItem('blogs', JSON.stringify(storedBlogs));
    alert('Blog updated!');
    router.push('/admin/list');
  };

  if (!blog) return <p>Loading blog data...</p>;

  return (
    <main className="container" style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
      <h2 className="heading">Edit Blog</h2>

      <input
        className="input"
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />

      <textarea
        className="input"
        rows={5}
        placeholder="Blog Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />

      <input
        className="input"
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />

      <button className="button" onClick={handleUpdate}>
        Update Blog
      </button>
    </main>
  );
}
