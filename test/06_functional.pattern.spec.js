var assert = require('chai').expect;

describe('JavaScript Inheritance Functional Patterns', () => {

  const animal = function (name) {
    const that = {};
    that.name = name || '';
    that.gender = '';
    that.planetOfBirth = 'Earth';
    that.getGender = function () {
      return this.gender;
    };
    return that;
  };

  const male = function (name) {
    const that = animal(name);
    that.name = name;
    that.gender = "Male";
    return that;
  };

  const dog = male('joe');
  it('Analysing dog', () => {
    // What will be his gender?
    expect(dog.getGender()).to.equal(__);
    // Where was he born?
    expect(dog.planetOfBirth).to.equal(__);
  });

  const female = function (name) {
    const that = animal(name);
    that.name = name;
    that.gender = "Female";
    return that;
  };

  const cat = female('ana');
  it('Analysing cat', () => {
    // What will be his gender?
    expect(cat.getGender()).to.equal(__);
    // Where was he born?
    expect(cat.planetOfBirth).to.equal(__);
  });


  it('Analysing dog and cat', () => {
    // Changing the planetOfBirth for the dog to "Pluton"
    dog.planetOfBirth = "Pluton";
    // Where were they born?
    expect(dog.planetOfBirth).to.equal(__);
    expect(cat.planetOfBirth).to.equal(__);
  });
});
