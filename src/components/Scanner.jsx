import React, { useState } from 'react';
import './Scanner.css';

const Scanner = ({ onClose }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [detectedProduct, setDetectedProduct] = useState(null);

  const startScan = () => {
    setIsScanning(true);
    setDetectedProduct(null);
    
    // Simulate scanning delay
    setTimeout(() => {
      setIsScanning(false);
      setDetectedProduct({
        name: "Avocado",
        score: 85,
        status: "good"
      });
    }, 3000);
  };

  return (
    <div className="scanner-container">
      <div className="scanner-background">
        <img src="/images/barcode-image.webp" alt="Product background" />
        <div className="scanner-overlay"></div>
      </div>
      <button className="close-button" onClick={onClose}>×</button>
      <div className="scan-box">
        <div className={`scan-line ${isScanning ? 'active' : ''}`}></div>
        {detectedProduct && (
          <div className="detection-result">
            <h3>{detectedProduct.name}</h3>
            <p>Score: {detectedProduct.score}</p>
            <span className={`status ${detectedProduct.status}`}>
              {detectedProduct.status === 'good' ? 'Safe' : 'Caution'}
            </span>
          </div>
        )}
      </div>
      <button 
        className="scan-button" 
        onClick={startScan}
        disabled={isScanning}
      >
        {isScanning ? 'Scanning...' : 'Scan Product'}
      </button>
    </div>
  );
};

export default Scanner;