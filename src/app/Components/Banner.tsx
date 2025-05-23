'use client';
import React from 'react';
import "./styles/globals.scss";

const Banner = () => {
  return (
    <section className="banner position-relative bottom-5 d-flex align-items-center justify-content-center text-center text-white" >
      {/* Background video */}
      <video
        className="video-bg position-absolute top-0 start-0 w-100 h-100"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

      {/* Centered Form Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '600px',
          padding: '0 15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
<form
  className="d-flex w-100 align-items-center"
  style={{ gap: '10px', position:"relative", top:"140px" }}
  onSubmit={(e) => e.preventDefault()}
>
  <input
  type="search"
  className="form-control bg-transparent text-white border border-light btn-outline-light rounded-pill px-4 py-3 shadow-sm search-input"
  placeholder="Search for dishes or restaurants..."
  style={{ flex: 1, height: '55px', color: 'white' }}
/>
  <button
    type="submit"
    className="btn btn-outline-light rounded-pill px-4 py-3 shadow-sm"
    style={{ height: '55px' }} // matching height with input
  >
    Search
  </button>
</form>
      </div>
    </section>
  );
};

export default Banner;
