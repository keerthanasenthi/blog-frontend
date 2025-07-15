'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (adminName === 'admin' && password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      router.push('/admin/home');
    } else {
      setError('Invalid admin credentials');
    }
  };

  return (
    <main className="container">
      <h2 className="heading">Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Admin Username"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          className="input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="button">Login</button>
      </form>
    </main>
  );
}
