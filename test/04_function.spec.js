import { expect } from 'chai';

describe("About Functions", () => {

  it("should declare function: add", () => {
    function add(arg1, arg2) {
      return arg1 + arg2;
    }
    expect(add(1, 2)).to.equal(3);
  });

  it("should know internal variables override outer variables", () => {
    let message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      message = "Inner";
      return message;
    }

    expect(getMessage()).to.equal("Outer");
    expect(overrideMessage()).to.equal("Inner");
    expect(message).to.equal("Inner");
  });

  it("should have lexical scoping", () => {
    let variable = "top-level";

    function parentfunction() {
      let variable = "local";

      function childfunction() {
        return variable;
      }

      return childfunction();
    }

    expect(parentfunction()).to.equal("local");
  });

  it("should use lexical scoping to synthesise functions", () => {

    function makeMysteryFunction(makerValue) {
      const newFunction = function doMysteriousThing(param) {
        return makerValue + param;
      };
      return newFunction;
    }

    const mysteryFunction3 = makeMysteryFunction(3);
    const mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).to.equal(23);
  });

  it("should allow extra function arguments", () => {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).to.equal("first");

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("arguments")).to.equal(undefined);

    // TODO: Fix the function to return all arguments. Hint: slice
    function returnAllArgs() {
      return Array.prototype.slice.call(arguments);
    }

    expect(returnAllArgs("first", "second", "third")).to.deep.equal(["first", "second", "third"]);
  });
});
