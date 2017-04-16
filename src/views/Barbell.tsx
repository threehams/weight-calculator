import * as React from 'react';

import "./Barbell.css";

interface BarbellProps {

}

export const Barbell: React.StatelessComponent<BarbellProps> = ({ children }) => (
  <div className="barbell-container">
    <svg className="barbell-svg" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216">
      <path d="M174.263 102.953h41.596v10.093h-41.597z"/>
      <path d="M164.08 88.387h10.984v39.226H164.08z"/>
      <path d="M.544 97.8h164.623V118.2H.544z"/>
    </svg>
    <div className="weight-container">
      { children }
    </div>
  </div>
);
