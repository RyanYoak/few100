import { isEven } from "../utils/math";

describe('writing functions', () => {
  describe('overloading a functions (spoiler, you cannot', () => {
    it('formatting a name', () => {
      function formatName(first: string, last: string, mi?: string): string {
        let fullName = `${last}, ${first}`;
        if (mi) { // 0, '', null, undefined
        fullName += ` ${mi}.`;
        }
          return fullName;
        }
        let fullName = formatName('Han', 'Solo');
        expect(fullName).toBe('Solo, Han');
        fullName = formatName('Han', 'Solo', 'D');
        expect(fullName).toBe('Solo, Han D.');
    });
  });
  describe('object and array destructuring', () => {
    it('arrary destructuring', () =>{
      const friends = ['Sam', 'Randy', 'Jarrett', 'Carter', 'Chan', 'Greg'];
      //array descrtuctring
      let [firstFriend, ,thirdFriend, ...rest] = friends;
      // rest contains carter chan and greg
      expect(firstFriend).toBe('Sam');

      const newFriends = ['David', ...friends, 'David2'];
    });
    it('spread operator on objects', () => {
      const movie = {
        title: 'star trek',
        director: 'Rodenberry',
        genre: 'scifi'
      };

      // let title = movie.title;
      // let director = movie.title;

      let {title, genre} = movie;
      let {director: directedBy} = movie;

      expect(directedBy).toBe(movie.director);
      expect(title).toBe(movie.title);

      // mutate the object (bad way)
      // movie.director = 'spock';
      // expect(directedBy).toBe('spock'); // this won't work

      const updatedMovie = {...movie, director: 'spock'};

      ({director: directedBy} = movie);
      expect(directedBy).toBe('spock');
    });
    it('a fake dictionary', () => {
      const friends = {
        'sean': {name: 'Sean Colin', phone: '555-555-5555'},
        'ryan': {name: 'Ryan Yoak', phone: '5'}
      };
      const ryansPhone = friends.ryan.phone;

      interface Dictionary<T>{
        [key:string]: T
      }
      interface Friend { name: string, phone: string};

      // const newFriends:Dictionary<Friend>{

      // }
    });
    it('destructuring paramaters', () => {
      function doSomethingRad({message, from}: {message:string, from:string}){
        console.log(`At ${new Date()} you got the following message: ${message}, from: ${from}`);
      }

      doSomethingRad({message:'message', from:'from'});
    });
  });
  describe('Array Methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('looking at each element', () => {
      let total = 0;
      numbers.forEach(e => total += e);
      expect(total).toBe(45);
    });
    it('methods that create new arrarys from another array', () => {
      it('has filter', () => {
        const evens = numbers.filter(num => num % 2 == 0);
      });
      it('has map', () => {
        function doubleIt(x:number):number{
          return x+x;
        }

        const doubled = numbers.map(doubleIt);
      });
    });
    it('checking the membership of an array', () => {
      it('does every element meet this criteria', () => {
        const allEven = numbers.every(isEven);
        expect(allEven).toBeFalse();
      });
      it('does any of the elemnets meet the criteria', () => {
        const someEven = numbers.some(isEven);
        expect(someEven).toBeTrue();
      })
    });
    it('reducing an array down to a single value', () => {
      const sum = numbers.reduce((l,r) => l+r);
      expect(sum).toBe(45);
    });
  });
  describe('using the array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('example 1', () => {
      // double each of the numbers >= 4, then sum up just the even numbers.
      const result = numbers.filter(x => x >= 4).map(n => n * 2).filter(isEven).reduce((l,r) => l + r);
    });
    it('example 2', () => {
      const data = [
        { name: 'Jeff', score: 89 },
        { name: 'Stacey', score: 208 },
        { name: 'Violet', score: 178 },
        { name: 'Henry', score: 108 }
      ];

      // These are bowling scores. I want to know who had the highest score, who had the lowest score, and what their scores were.
      // There are no ties in this example. If you figure it out, redo it so it can deal with ties.
      // (in bowling, the highest score you can get is 300, and the lowest is 0. Highest score wins)
      // your code here. expect(result.highScorer).toBe('Stacey');

      const result:any = {};
      expect(result.highScore).toBe(208);
      expect(result.lowScorer).toBe('Jeff');
      expect(result.lowScore).toBe(89);


    });
    it('example/practice 3', () => {
      const vehicles = [
      { vin: '38739893893', make: 'Ford', model: 'Bronco', year: 2020, mileage: 120_000},
      { vin: '333383883', make: 'Chevy', model: 'Camaro', year: 1984, mileage: 310_000},
      { vin: '899389893', make: 'Honda', model: 'Pilot', year: 2017, mileage: 89_000},
      { vin: '8398983893', make: 'Range Rover', model: 'Evoque', year: 2016, mileage: 130_000},
      ];

      // We want the make and model of all cars that have:
      // high mileage (over 100,000 miles),
      // and are older than 2000
      const answer: string[] = vehicles.filter(x => x.year > 2000).filter(x => x.mileage > 100_000).map(e => `${e.make} ${e.model}`);
      expect(answer).toEqual(['Ford Bronco', 'Range Rover Evoque']);
      });
  });
});
