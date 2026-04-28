import React from 'react';
import './Scanner.css';

const Scanner = () => {
  return (
    <div className="scanner-container">
      <div className="scanner-background">
        <img src="/images/barcode-image.webp" alt="Product background" />
        <div className="scanner-overlay"></div>
      </div>
      <div className="scan-box">
        <div className="scan-line"></div>
      </div>
    </div>
  );
};

export default Scanner;