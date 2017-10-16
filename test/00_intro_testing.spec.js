import { expect } from 'chai';

// documentation for the chai#expect http://chaijs.com/api/bdd/

describe('Introduction to Mocha and WallabyJS', () => {

  // You can disable test by adding an 'x' in front of the runner
  xit('Disable this test', () => {
    const disabled = __;
    expect(disabled).to.be.false;
  });

  // We shall contemplate truth by testing reality, via spec expectations.
  it('true vs false', () => {
    const truth = true;
    const falsy = false;
    expect(truth).to.be.ok;
    expect(falsy).to.not.be.ok;
  });

  it('List all the falsy values in JavaScript', () => {
    let falsy = 0;
    expect(falsy).to.not.be.ok;
    falsy = false;
    expect(falsy).to.not.be.ok;
    falsy = undefined;
    expect(falsy).to.not.be.ok;
    falsy = "";
    expect(falsy).to.not.be.ok;
    falsy = null;
    expect(falsy).to.not.be.ok;
  });

  // Expected value versus actual value
  it('should expect equality',() => {
    const expectedValue = 2;
    const actualValue = 1 + 1;

    expect(actualValue === expectedValue).to.be.ok;
  });

  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', () => {
    const expectedValue = "2";
    const actualValue = (1 + 1).toString();

  // toEqual() will always use === to compare.
    expect(actualValue).to.equal(expectedValue);
  });
});
