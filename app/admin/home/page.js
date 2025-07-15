'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminHome() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminAuth');
    if (isLoggedIn !== 'true') {
      router.push('/login/admin');
    }
  }, [router]);

  const goTo = (path) => router.push(path);

  return (
    <main className="container">
      <h2 className="heading">Welcome, Admin</h2>
      <div className="button-group">
        <button className="button" onClick={() => goTo('/admin/create')}>Create Blog</button>
        <button className="button" onClick={() => goTo('/admin/update')}>Update Blog</button>
        <button className="button" onClick={() => goTo('/admin/list')}>List Blogs</button>
      </div>
    </main>
  );
}
