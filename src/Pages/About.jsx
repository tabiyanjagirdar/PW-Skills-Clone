// src/Pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center py-12 px-6">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">About Us</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to PW Skills! We are dedicated to providing top-notch educational resources and skill-building opportunities.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Our mission is to empower individuals through comprehensive training programs that enhance their career prospects in the digital landscape.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Our Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1678690832311-bb6e361989ca?q=80&w=1524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Web Development" 
              className="h-24 w-full object-cover rounded-[20px] mb-4" 
            />
            <h3 className="font-bold text-lg">Web Development</h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1660616246653-e2c57d1077b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fHww" 
              alt="Data Science" 
              className="h-24 w-full object-cover rounded-[20px] mb-4" 
            />
            <h3 className="font-bold text-lg">Data Science</h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Graphic Design" 
              className="h-24 w-full object-cover rounded-[20px] mb-4" 
            />
            <h3 className="font-bold text-lg">Graphic Design</h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center">
            <img 
              src="https://plus.unsplash.com/premium_photo-1685283298465-e52e933a3312?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VvfGVufDB8fDB8fHww" 
              alt="SEO" 
              className="h-24 w-full object-cover rounded-[20px] mb-4" 
            />
            <h3 className="font-bold text-lg">SEO</h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center">
            <img 
              src="https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="Digital Marketing" 
              className="h-24 w-full object-cover rounded-[20px] mb-4" 
            />
            <h3 className="font-bold text-lg">Digital Marketing</h3>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center">
            <img 
              src="https://plus.unsplash.com/premium_photo-1676618539992-21c7d3b6df0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhhY2tlcnxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Cyber Security" 
              className="h-24 w-full object-cover rounded-[20px] mb-4" 
            />
            <h3 className="font-bold text-lg">Cyber Security</h3>
          </div>
        </div>

        <p className="text-gray-700 text-lg mt-6">
          Join us on this journey to develop your skills and enhance your career!
        </p>
      </div>
    </div>
  );
};

export default About;
