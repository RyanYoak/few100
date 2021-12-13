describe('basic data types', () => {
  it('is easy to declare a variable', () =>{
    let a = 10, b = 20;
    let answer =  a + b;
    expect(answer).toBe(30);
  });

  describe('declaring variables', () => {
    it('untyped variables', () => {
      let a;
      a = 19;
      expect(a).toBe(19);

      a = 'taccos';
      expect(a).toBe('taccos');

      a = function(x: number){
        return x * 2;
      }
      expect(typeof(a)).toBe('function');
      expect(a(10)).toBe(20);
    });
    it('setting data types for a variable', () => {
      let x:number|string;
      x =  12;
      x = 'taccos';
    });
    it('initializing a variable', () => {
      let x =  12;
      // not only assigning it but assigning it to a number
    });
    it('declaring constants', () => {
      const x = 12;
      // have to initialize when const
      // cannot reasign a new value to this variable
      const jobs = ['Developer', 'QA', "STE"];
      jobs[0] = 'Fry Cook';
      jobs.push('Developer Sr');
      // this is legal
      expect(jobs).toEqual(['Fry Cook', 'QA', 'STE', 'Developer Sr']);
    });
  });
  describe('built in types', () => {
    it('numbers', () =>{
      const n1 = 12;
      let n2 = 3.14159265358979323846267448327590288419716939937510;
      let n3 = 0xFFF; // base 16
      let n4 = 0o111; // base 8
      let n5 = 0b11011; // base 2
      let n6 = 13_374_562_157_219_860; // '_' are ignored
    });
  });
  describe('strings', ()=>{
    it('delimiters', () => {
      let s1 = "dog";
      let s2 = 'dog';
      expect(s1).toBe(s2);

      let story1 = "She said \"Hello\" to her";
      let story2 = 'She said "Hello" to her';
      expect(story1).toBe(story2);
    });
    it('literal or format strings',  () => {
      let s1 = `dog`;
      let s2 = 'dog';
      expect(s1).toBe(s2);

      let story = `Chapter 1.

      It was a dark and stormy night.
      The End.`;

      let name = 'Earl', pay = 120_000;
      let message1 = 'The customer\'s name is ' + name + ' and they are paid ' + pay + ' a year.';
      let message2 = `The customer's name is ${name} and they are paid ${pay} a year.`;

      expect(message1).toEqual(message2);

    });
  });
  describe('booleans and equality', () => {
    it('booleans', () => {
      let ok = true;
      let nope = false;

      if('taccos'){
        console.log('delicious');
      }

      //truthy: if an object converts to true when cast to a boolean then it is truthy
      expect('tacos').toBeTruthy();
      expect('').toBeFalsy();
      expect(-9).toBeTruthy();
      expect(0).toBeFalsy();
      expect(undefined).toBeFalsy();
      expect(null).toBeFalsy();
    });
    it('equality', () => {
      //expect(10 === '10').toBeFalse();
    });
  });

  describe('object literals', () => {
    it('object literals',  () => {
      const movie = {};
      //movie.title = "Jaws";

      interface Movie {
        title: string;
        director: string;
        yearReleased: number;
    }

      const movie2: Movie = {
        title: 'Jaws',
        director: 'Spielberg',
        yearReleased: 1977
      };

      expect(movie2.director).toBe('Spielberg');
    })
  })
});
