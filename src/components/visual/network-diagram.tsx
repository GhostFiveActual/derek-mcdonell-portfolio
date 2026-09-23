import { useState, useEffect } from 'react';

const NetworkDiagram = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(!isAnimating);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg viewBox="0 0 1000 600" className="network-diagram">
      {/* Root/cable fusion paths */}
      <path d="M50 100 L300 200 L700 300" stroke="#222" strokeWidth="2" />
      {/* Terminal cursor animation */}
      {isAnimating && <circle cx="50" cy="100" r="5" fill="#ff4444" />}
    </svg>
  );
};

export default NetworkDiagram;