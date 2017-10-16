import { expect } from 'chai';

describe("About Arrays", () => {
  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", () => {
    const emptyArray = [];
    expect(typeof(emptyArray)).to.equal('object');
    expect(emptyArray.length).to.equal(0);

    const multiTypeArray = [0, 1, "two", () => {
      return 3;
    }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).to.equal(0);
    expect(multiTypeArray[2]).to.equal("two");
    expect(multiTypeArray[3]()).to.equal(3);
    expect(multiTypeArray[4].value1).to.equal(4);
    expect(multiTypeArray[4]["value2"]).to.equal(5);
    expect(multiTypeArray[5][0]).to.equal(6);
  });

  it("should understand array literals", () => {
    const array = [];

    // Oops
    expect(array).to.not.equal([]);

    // Introducing ... deep equal
    expect(array).to.deep.equal([]);

    array[0] = 1;
    expect(array).to.deep.equal([1]);

    array[1] = 2;
    expect(array).to.deep.equal([1, 2]);

    array.push(3);
    expect(array).to.deep.equal([1, 2, 3]);
  });

  it("should understand array length", () => {
    let array = [1, 2, 3, 4];

    expect(array.length).to.equal(4);
    array.push(5, 6);
    expect(array.length).to.equal(6);

    array = new Array(10);
    expect(array.length).to.equal(10);

    array.length = 5;
    expect(array.length).to.equal(5);
  });

  it("should slice arrays", () => {
    const array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).to.deep.equal(["peanut"]);
    expect(array.slice(0, 2)).to.deep.equal(["peanut", "butter"]);
    expect(array.slice(2, 2)).to.deep.equal([]);
    expect(array.slice(2, 20)).to.deep.equal(["and", "jelly"]);
    expect(array.slice(3, 0)).to.deep.equal([]);
    expect(array.slice(5, 1)).to.deep.equal([]);
    expect(array.slice(1)).to.deep.equal(["butter", "and", "jelly"]);
    expect(array.slice(0, -1)).to.deep.equal(["peanut", "butter", "and"]);
    expect(array.slice(0, -3)).to.deep.equal(["peanut"]);
  });

  it("should know array references", () => {
    const array = ["zero", "one", "two", "three", "four", "five"];

    function passedByReference(refArray) {
      refArray[1] = "changed in function";
    }

    passedByReference(array);
    expect(array[1]).to.equal("changed in function");

    const assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).to.equal("changed in assignedArray");

    const copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).to.equal("three");
  });

  it("should push and pop", () => {
    const array = [1, 2];
    array.push(3);
    expect(array).to.deep.equal([1, 2, 3]);

    const poppedValue = array.pop();
    expect(poppedValue).to.equal(3);
    expect(array).to.deep.equal([1, 2]);
  });

  it("should know about shifting arrays", () => {
    const array = [1, 2];

    array.unshift(3);
    expect(array).to.deep.equal([3, 1, 2]);

    const shiftedValue = array.shift();
    expect(shiftedValue).to.equal(3);
    expect(array).to.deep.equal([1, 2]);
  });
});
