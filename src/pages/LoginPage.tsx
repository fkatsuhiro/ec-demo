import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validUser = import.meta.env.VITE_LOGIN_USER.replace(/'/g, '');
    const validPass = import.meta.env.VITE_LOGIN_PASSWORD.replace(/'/g, '');

    if (username === validUser && password === validPass) {
      login();
      navigate('/products');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login">
      <h1 className="login__title">MYSTORE</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="login__input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => { setUsername(e.target.value); setError(''); }}
          required
        />
        <input
          className="login__input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => { setPassword(e.target.value); setError(''); }}
          required
        />
        {error && <p className="login__error">{error}</p>}
        <button className="login__btn" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
}
