import * as React from 'react';
import { shallow } from 'enzyme';

import { expect } from '../__test__/configureExpect';
import { Example } from './Example';

describe('Imagine', function() {
  context('with no aspect ratio', function() {
    context('with a single source', function() {
      it('renders an img tag', function() {
        const element = shallow(<Example className="example">hi</Example>);
        expect(element.contains(<div className="example">hi</div>)).to.be.true;
      });
    });
  });
});
