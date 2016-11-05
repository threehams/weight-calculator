import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../models';

interface ExampleProps {
  className: string;
  example?: string;
  children?: any;
}

export const Example: React.StatelessComponent<ExampleProps> = ({ className, children }) => {
  return (
    <div>
      <div className={className}>{ children }</div>
    </div>
  );
};
