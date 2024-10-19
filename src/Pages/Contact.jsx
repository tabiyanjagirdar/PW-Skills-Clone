// src/Pages/Contactus.jsx
import React from 'react';

const Contactus = () => {
  return (
    <div className="  bg-slate-950 min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://your-image-url.com')" }}>
      <div className=" m-4 bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-lg w-full ">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Fill out the form below to get in touch.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
