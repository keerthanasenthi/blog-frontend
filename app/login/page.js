'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container">
      <h1 className="heading">Login Page</h1>
      <div className="button-group">
        <Link href="/login/user" className="button">User Login</Link>
        <Link href="/login/admin" className="button">Admin Login</Link>
      </div>
    </main>
  );
}
