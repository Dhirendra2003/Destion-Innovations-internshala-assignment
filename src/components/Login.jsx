import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Login submitted', { email, password });
    nav('/dashboard')
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="px-8 py-6 mt-4 text-left bg-gray-100/80 shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
              <Link to={'/resetpassword'} className="text-sm text-blue-600 hover:underline">Forgot password?</Link>
            </div>
          </div>
        </form>
        <div className="mt-6 text-grey-dark">
          Don't have an account?
          <Link to="/signup" className="text-blue-600 hover:underline"> Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;