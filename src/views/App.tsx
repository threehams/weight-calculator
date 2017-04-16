import * as React from 'react';
import { Provider } from 'react-redux';
import { Layout } from '.';

import "../style.css";

interface AppProps {
  store: any;
}

// note: this has to be a class (react-hot-loader requirement)
export class App extends React.Component<AppProps, {}> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <Layout />
      </Provider>
    );
  }
}
