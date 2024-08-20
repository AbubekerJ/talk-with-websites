'use client'

import Head from 'next/head';
import { useState } from 'react';

function LandingPage() {
  const [input, setInput] = useState('');

  const handleClick = () => {
    if (input) {
      window.location.href = `https://chat-theweb-72vfqnv5z-abubekers-projects-43dcb284.vercel.app/${input}`;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Head>
        <title>Chat The Web</title>
      </Head>

      <header className="bg-teal-600 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-3">Chat The Web</h1>
          <p className="text-lg">Transform any website into a chat platform with ease</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Features</h2>
          <ul className=" pl-6 space-y-2 text-gray-300 items-center justify-center text-center">
            <li>Real-time messaging</li>
            <li>Works with any website</li>
           
          </ul>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center">Try it Out</h2>
          <p className="text-center mb-6 text-gray-300">Enter a website URL to get started:</p>
          <div className="flex justify-center">
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="https://www.example.com"
              className="flex-1 px-4 py-3 bg-gray-700 text-gray-200 rounded-l-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              onClick={handleClick}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-r-md ml-2"
            >
              Chat Now
            </button>
          </div>
        </div>
      </main>

      
    </div>
  );
}

export default LandingPage;
