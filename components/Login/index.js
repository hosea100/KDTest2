"use client";
import React, { useState } from 'react'
import Link from 'next/link';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidden, setHidden] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  const togglePasswordVisibility = () => {
    setHidden(!hidden);
  };

  return (
    <div
      className='relative bg-skin-base-light bg-cover bg-center h-screen min-h-screen flex flex-col justify-center items-center font-montserrat' id='about'
      style={{ backgroundImage: 'url("/Img/blobfull.svg")' }}
    >
      <div className="bg-[rgba(236,237,237,0.1)] border-2 border-[#eceded] box-border mx-10 p-10">
        <h1 className="font-inter font-bold text-[#00657a] text-5xl mb-6">LOGIN</h1>
        <div className="text-start mt-6">
          <form name="LoginForm" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="userID" className="font-raleway font-semibold text-lg mb-1">E-mail address</label>
              <input
                id="userID"
                type="text"
                name="userID"
                placeholder="Email address"
                className="w-full py-3 px-4 bg-[#fcfcfd] border border-[#cfd0d7] rounded-md font-raleway font-medium text-base text-[#000] placeholder-[rgba(26,32,61,0.3)]"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-6 relative">
              <label htmlFor="userPassword" className="font-raleway font-semibold text-lg mb-1">Password</label>
              <input
                id="userPassword"
                type={hidden ? 'password' : 'text'}
                name="userPassword"
                placeholder="Password"
                className="w-full py-3 px-4 bg-[#fcfcfd] border border-[#cfd0d7] rounded-md font-raleway font-medium text-base text-[#000] placeholder-[rgba(26,32,61,0.3)]"
                required
                onChange={(event) => setPassword(event.target.value)}
              />
              <span
                className="absolute right-0 bottom-0 transform translate-x-1/2 translate-y-[-30%] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {hidden ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#4D4D4D]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Eye icon */}
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#4D4D4D]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* Eye-slash icon */}
                  </svg>
                )}
              </span>
            </div>
            <Link href="/">
              <p className="font-raleway font-medium text-base text-[#698afd] underline mt-4 block">
                Forgot your password?
              </p>
            </Link>
            <button
              type="submit"
              className="w-full py-3 bg-[#ffc737] text-white font-raleway font-semibold text-xl rounded-md mt-6"
            >
              SIGN IN
            </button>
          </form>
        </div>
        <div className="text-center mt-6">
          <button
            className="w-full py-3 bg-[#1877f2] text-white font-raleway font-semibold text-xl rounded-md mb-2"
          >
            Sign In with Facebook
          </button>
          <button
            className="w-full py-3 bg-white shadow-md border border-[rgba(0,0,0,0.3)] rounded-md font-raleway font-medium text-base text-[rgba(0,0,0,0.54)]"
            onClick={() => signIn('keycloak')}
          >
            Sign In with Keycloak
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm