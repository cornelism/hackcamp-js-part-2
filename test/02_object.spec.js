import { expect } from 'chai';

describe("About Objects", () => {

  describe("Properties", () => {
    let megalomaniac;

    beforeEach(() => {
      megalomaniac = { mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", () => {
      expect(megalomaniac.mastermind).to.equal("Joker");
    });

    it("should confirm that properties are case sensitive", () => {
      expect(megalomaniac.henchwoman).to.equal("Harley");
      expect(megalomaniac.henchWoman).to.equal(undefined);
    });

    it("should know that properties can be added and deleted", () => {
      const megalomaniac = { mastermind: "Agent Smith", henchman: "Agent Smith" };

      expect("secretary" in megalomaniac).to.equal(false);

      megalomaniac.secretary = "Agent Smith";
      expect("secretary" in megalomaniac).to.equal(true);

      delete megalomaniac.henchman;
      expect("henchman" in megalomaniac).to.deep.equal(false);
    });
  });

  describe("'this' context", () => {
    it("should confirm that when a function is attached to an object, 'this' refers to the object", () => {
      let currentDate = new Date();
      let currentYear = (currentDate.getFullYear());
      let megalomaniac = {
        mastermind: "James Wood",
        henchman: "Adam West",
        birthYear: 1970,
        calculateAge: function() {
          return currentYear - this.birthYear;
        }
      };

      expect(currentYear).to.deep.equal(2017);
      expect(megalomaniac.calculateAge()).to.deep.equal(47);
    });
  });

  describe("'in' keyword", () => {
    let megalomaniac;

    beforeEach(() => {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", () => {

      const hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).to.deep.equal(true);
    });

    it("should not have the detonator however", () => {

      const hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).to.deep.equal(false);
    });
  });

  describe("Prototype", () => {
    it("should use prototype to add to all objects", () => {

      function Circle(radius) {
        this.radius = radius;
      }

      let simpleCircle = new Circle(10);
      const colouredCircle = new Circle(5);
      colouredCircle.colour = "red";

      expect(simpleCircle.colour).to.equal(undefined);
      expect(colouredCircle.colour).to.deep.equal("red");

      Circle.prototype.describe = function() {
        return "This circle has a radius of: " + this.radius;
      };

      expect(simpleCircle.describe()).to.deep.equal("This circle has a radius of: 10");
      expect(colouredCircle.describe()).to.deep.equal("This circle has a radius of: 5");
    });
  });
});
