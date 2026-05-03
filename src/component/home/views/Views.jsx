import React from 'react';

const Views = () => {
    return (
      <div className="bg-gradient-to-r min-h-72 from-[#632EE3] to-[#9F62F2] pt-4">
        <h2 className="text-3xl text-center text-center font-bold py-8 text-white">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 text-center max-w-7xl mx-auto mt-6">
          <div className="text-white">
            <p className="text-base font-semibold">Total Downloads</p>
            <h2 className="text-5xl font-bold">29.6M</h2>
            <small className="text-base font-semibold">
              21% more than last month
            </small>
          </div>
          <div className="text-white">
            <p className="text-base font-semibold">Total Downloads</p>
            <h2 className="text-5xl font-bold">906K</h2>
            <small className="text-base font-semibold">
              21% more than last month
            </small>
          </div>
          <div className="text-white">
            <p className="text-base font-semibold">Total Downloads</p>
            <h2 className="text-5xl font-bold">132+</h2>
            <small className="text-base font-semibold">
              21% more than last month
            </small>
          </div>
        </div>
      </div>
    );
};

export default Views;