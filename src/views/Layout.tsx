import * as React from 'react';
import { connect } from 'react-redux';
import { TextInput, Weight } from '../components';
import { State } from '../models';
import { Barbell } from ".";

import "./Layout.css";

interface AppProps {
  example: string;
}

const mapStateToProps = (state: State) => ({
  example: state.example.example,
});

const weights = [45, 45, 35, 25, 10, 5, 2.5];

const BaseLayout: React.StatelessComponent<AppProps> = ({ example }) => (
  <main className="container">
    <div className="section-inputs">
      <TextInput label="Weight" />
    </div>
    <div className="section-barbell">
      <Barbell>
        { weights.reverse().map((weight, index) => <Weight key={index} amount={weight} />) }
      </Barbell>
    </div>
  </main>
);

export const Layout = connect(mapStateToProps)(BaseLayout);
