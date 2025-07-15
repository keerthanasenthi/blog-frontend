'use client';

import { useRouter } from 'next/navigation';
import Header from './components/Header';

export default function HomePage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <>
      <Header />
      <main className="home-container">
        <h1 className="home-heading">Welcome to the Blog Panel</h1>
        <p className="home-subtext">Manage your blog content easily and efficiently.</p>
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </main>
    </>
  );
}
