import { shallow } from 'enzyme';
import * as React from 'react';

import { expect } from '../__test__/configureExpect';
import { Example } from './Example';

describe('Imagine', () => {
  context('with no aspect ratio', () => {
    context('with a single source', () => {
      it('renders an img tag', () => {
        const element = shallow(<Example className="example">hi</Example>);
        expect(element.contains(<div className="example">hi</div>)).to.be.true;
      });
    });
  });
});
