// LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-gray-700">
      <div className="lg:w-3/5 p-8">
        <div className="w-full flex flex-col justify-center items-start md:items-start lg:px-0 pr-12 lg:pr-0">
        <h1 className="text-7xl font-bold mb-4">We're changing</h1>
        <p className="text-gray-200 mb-8 text-7xl">
          the way you
        </p>
        </div>
        <div className="w-full relative h-7 overflow-hidden lg:h-12 -ml-8 lg:-ml-4 -mt-5">
            <div className="">
                <div className="flex flex-col items-center mx-4 md:mx-0">
                    <h1 className='text-3xl pb-4 text-center'>Invest!</h1>
                </div>
            </div>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full">
          Download the App
        </button>
      </div>
      <div className="lg:w-1/2">
        <video
          className="w-full h-auto"
          autoPlay
          muted
          loop
          playsInline
          poster="/poster-image.jpg" // Provide a poster image for the video
        >
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default LandingPage;
