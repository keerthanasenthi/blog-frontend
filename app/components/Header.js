'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/"> MyBlog</Link>
      </div>
      <nav className="nav-links">
        <Link href="/" className="nav-item">Home</Link>
        <Link href="/about" className="nav-item">About</Link>
        <Link href="/contact" className="nav-item">Contact</Link>
      </nav>
    </header>
  );
}
