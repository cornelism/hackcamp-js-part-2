var assert = require('chai').expect;

describe('JavaScript Inheritance Pseudoclassical Patterns', () => {

  const extendPrototype = function (child, parent) {
    child.prototype = parent.prototype;
  };

  // base Animal object
  const Animal = function () {
  };
  // inhertiable attributes / methods
  Animal.prototype = {
    name: '',
    gender: '',
    planetOfBirth: 'Earth',
    getGender: function () {
      return this.gender;
    }
  };

  const Male = function (name) {
    this.name = name;
    this.gender = 'Male';
  };

  // Male inherits from Animal
  extendPrototype(Male, Animal);


  const dog = new Male('dog');
  it('Analysing an instance of Male', () => {
    // What will be his gender?
    expect(dog.gender).to.equal(__);
    // Where was he born?
    expect(dog.planetOfBirth).to.equal(__);
  });

  const Female = function (name) {
    this.name = name;
    this.gender = 'Female'; // By default we set it
  };

  // Female inherit from Animal
  extendPrototype(Female, Animal);


  const cat = new Female('cat');
  it('Analysing an instance of Female', () => {
    // What will be his gender?
    expect(cat.getGender()).to.equal(__);
    // Where was she born?
    expect(cat.planetOfBirth).to.equal(__);
  });

  it('Analysing dog and cat', () => {
    // Changing the planetOfBirth for the Male to "Pluton"
    Male.prototype.planetOfBirth = "Pluton";
    // Where were they born? (dog and cat)
    expect(dog.planetOfBirth).to.equal(__);
    expect(cat.planetOfBirth).to.equal(__);
  });
});
