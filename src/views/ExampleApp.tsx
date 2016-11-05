import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../models';
import { Example } from '../components';

interface AppProps {
  example: string;
}

const mapStateToProps = (state: State) => ({
  example: state.example.example,
});

const BaseExampleApp: React.StatelessComponent<AppProps> = ({ example }) => {
  return (
    <div>
      <Example className={ example }>example</Example>
      <Example className={ example }>example</Example>
    </div>
  );
};

export const ExampleApp = connect(mapStateToProps)(BaseExampleApp);
