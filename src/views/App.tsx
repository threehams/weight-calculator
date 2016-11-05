import * as React from 'react';
import { Provider } from 'react-redux';
import { Match, BrowserRouter } from 'react-router';

import { ExampleApp } from '.';

interface AppProps {
  store: any;
}

export class App extends React.Component<AppProps, {}> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <ExampleApp>
        </ExampleApp>
      </Provider>
    );
  }
}
