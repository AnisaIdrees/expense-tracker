import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, signInWithEmailAndPassword } from '../config/firebase.config'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const login = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success('Login successful!')
      setTimeout(() => {
        navigate('/')
      }, "5000")
    }
    catch (error) {
      toast.error(`Error: ${error.message}`)
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#1e1e1e] rounded-2xl shadow-lg">
        <h2 className="text-[26px] font-bold text-center text-white"><span className='text-[aqua]'>Login</span> to Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[transparent] text-white placeholder-gray-500 border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-[aqua] focus:border-[aqua] transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-white">Password</label>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[transparent] text-white placeholder-gray-500 border border-white rounded-md focus:outline-none focus:ring-1 focus:ring-[aqua] focus:border-[aqua] transition"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-[aqua] rounded-lg hover:bg-[#00cccc] transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-white">
          Don’t have an account? <Link
            to={'/signup'}
            className="text-[aqua] hover:underline">Sign up</Link>
        </p>
      </div>
      <ToastContainer position="top-center" theme='dark' />
    </div>
  );
}

export default Login;
