import { expect } from 'chai';

/**
* Context in JavaScript
**/
describe('Context in JavaScript', () => {

  describe('Should use call & apply', () => {

    function upperCase() {
      return this.toUpperCase();
    }

    function toFixed(numberOfDecimals) {
      return this.toFixed(numberOfDecimals);
    }

    function concat(secondArray) {
      return this.concat(secondArray);
    }

    it('with call', () => {

      // TODO Modify the call below to satisfy all the assertions below.
      const actual = upperCase.call('juan');

      expect(actual).equal('JUAN');
    });

    it('with call and arguments', () => {

      const numberToUse = 5.56789;

      // TODO Modify the call below to satisfy all the assertions below.
      const actual = toFixed.call(numberToUse, 2);

      expect(actual).equal('5.57');
    });

    it('with apply and arguments', () => {

      // TODO Modify the code below to satisfy all the assertions below.
      const actual = concat.apply([1,2,3], [4]);

      expect(actual).eql([1, 2, 3, 4]);
    });
  });

  describe('Should use bind', () => {

    it('increment the counter value', (done) => {

      const counter = {
        value: 0,
      };
      // TODO Modify the code below to satisfy all the assertions below.
      function increment() {
        this.value++;
        if (this.value === 10) {
          expect(this.value).equal(10);
          done();
        }
      }
      setInterval(increment.bind(counter), 30);
    });

    it('push a new user after 1s', (done) => {

      const hackcamp = {
        members: ['Davy']
      };
      // TODO Modify the code below to satisfy all the assertions below.
      function addMembers() {
        this.members.push('Joker');
        expect(this.members.length).equal(2);
        done();
      }
      setTimeout(addMembers.bind(hackcamp), 1000);
    });
  });

  describe('What does "this" refer to ?', () => {

    function addMentor(mentor) {
      this.mentors.push(mentor);
      return this.mentors;
    }

    it('Should add new mentor ', () => {

      const company = {
        name: 'Hackages Lab',
        mentors: ['Alex'],
        addMentor: addMentor,
      };
      const actual = company.addMentor('Juan');

      expect(actual).to.be.deep.equal(['Alex', 'Juan']);
    });

    it('Should switch the context', () => {

      const hackcamp = {
        mentors: ['Eric', 'Martine']
      };
      const davy = 'Joker';

      // TODO Modify the code above to satisfy all the assertions below.
      let actual = addMentor.call(hackcamp, davy);

      expect(actual).to.deep.equal(['Eric', 'Martine', 'Joker']);

      const hackjam = {
        mentors: ['Harold', 'Bouba', 'Antonio'],
      };

      // TODO Modify the code above to satisfy all the assertions below.
      actual = addMentor.call(hackjam, davy);

      expect(actual).to.deep.equal(['Harold', 'Bouba', 'Antonio', 'Joker']);
    });

  });

  describe('More about context', () => {

    it("with 'new' keywords ", () => {

      // TODO Modify the code below to satisfy all the assertions below.
      function User(args) {
        function init() {
          this.name = args.name;
        }
        init.call(this);
      }
      const actual = new User({ name: 'Hackages' });

      expect(actual).eql({ name: 'Hackages' });
    });

    it("without 'new' keywords ", () => {
      /**
       * TODO
       * Start from the solution you found above.
       * Modify the function to solve the assertion
       * Also, this time try not to use the 'new' keyword
       * and simply call the User function instead.
       * Ex: const user = User({ name: 'Hackages' })
       */
      function User(args) {
        function init() {
          this.name = args.name;
        }
        init.call(this);
        return this;
      }
      const actual = User.call({}, {name: 'Hackages'}); // TODO
      expect(actual).eql({ name: 'Hackages' });
    });
  });

});
