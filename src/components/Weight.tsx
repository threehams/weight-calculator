import * as React from 'react';

import './Weight.css';

interface ExampleProps {
  amount: number;
}

export const Weight: React.StatelessComponent<ExampleProps> = ({ amount }) => (
  <div className="weight">
    <div className="weight-top" />
    <div className="weight-bar" style={{ height: `${amount * 1.2 + 15}%` }} />
    <p className="weight-amount">{ amount }</p>
  </div>
);
