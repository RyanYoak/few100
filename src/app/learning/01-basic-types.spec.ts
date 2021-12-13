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
});
