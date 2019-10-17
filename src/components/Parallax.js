import React from 'react';

const Parallax = props => {
  return (
    <div className="WaveWrapper">
      <div className="InnerWave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 338.05"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="MyGradient">
              <stop offset="5%" stop-color="#84fab0" />
              <stop offset="95%" stop-color="#8fd3f4" />
            </linearGradient>
          </defs>
          <path style={{ fill: `url(#MyGradient)` }}>
            <animate
              attributeName="d"
              values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
              repeatCount="indefinite"
              dur="30s"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Parallax;
