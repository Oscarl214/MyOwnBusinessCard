import React from 'react';

const InfoSection = () => {
  return (
    <div className="info">
      <img src="./HeadShot.png" className="img" />
      <div className="info-desc">
        <h1>Oscar Leal</h1>
        <p className="info-p">Full Stack Developer</p>
        <a target="_blank" href="https://o-site.netlify.app/#home">
          {' '}
          <p>Portfolio</p>
        </a>
      </div>
      <div className="info-btn">
        <button>
          <img src="./Mail.png" />
          <a className="info-email" href="mailto: lealoscar56@gmail.com">
            Email
          </a>
        </button>
        <button className="link-btn">
          {' '}
          <img src="./linkedin.png" />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/oscar-l-8371a512a/"
          >
            LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
};

export default InfoSection;
