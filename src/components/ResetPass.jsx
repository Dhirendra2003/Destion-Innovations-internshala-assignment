import  { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPass= () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
  
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="px-8 py-6 mt-4 text-left bg-gray-100/80 shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center">Forgot Password</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Reset Password
              </button>
            </div>
          </div>
        </form>
        
        <div className="mt-6 text-grey-dark">
          Remember your password?
          <Link to="/login" className="text-blue-600 hover:underline"> Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;