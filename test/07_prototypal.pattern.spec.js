import { expect } from 'chai';

describe('JavaScript Inheritance Prototypal Patterns', () => {

  // base Animal object
  const Animal = function () { };
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
    Animal.call(this);
    this.name = name;
    this.gender = 'Male';
  };
  Male.prototype = Object.create(Animal.prototype);

  const dog = new Male('dog');
  it('Analysing an instance of Male', () => {
    // What will be his gender?
    expect(dog.getGender()).to.equal(__);
    // Where was he born?
    expect(dog.planetOfBirth).to.equal(__);
  });

  const Female = function (name) {
    Animal.call(this);
    this.name = name;
    this.gender = 'Female';
  };
  Female.prototype = Object.create(Animal.prototype);

  const cat = new Female('dog');
  it('Analysing an instance of Female', () => {
    // What will be his gender?
    expect(cat.getGender()).to.equal(__);
    // Where was she born?
    expect(cat.planetOfBirth).to.equal(__);
  });

  it('Analysing dog and cat', () => {
    // Changing the planetOfBirth for the Male to "Pluton"
    Male.prototype.planetOfBirth = "Pluton";
    // Where were they born?
    expect(dog.planetOfBirth).to.equal(__);
    expect(cat.planetOfBirth).to.equal(__);
  });
});
