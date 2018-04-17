import { expect } from 'chai';
import 'mocha';
import { hello } from './hello';

describe('hello', () => {
  it('should return hello world', () => {
    const result = hello();
    expect(result).to.equal('Hello World!');
  });
});
