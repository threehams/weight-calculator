import '../polyfills';
import 'mocha';

import * as chai from 'chai';
import * as chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);
chai.config.truncateThreshold = 0;

export { expect } from 'chai';
