import * as React from 'react';

interface ExampleProps {
  label: string;
}

export const TextInput: React.StatelessComponent<ExampleProps> = ({ label }) => (
  <label>
    { label }
    <input type="text" />
  </label>
);
