import React from 'react';
import '../css/styles.css'; 

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Footer;