describe('Challenges team 3', () => {
    // //////////////////////////////////////
    // //  KATA 1
    // //////////////////////////////////////
    it('Tricky scope!', () => {
      let a = 5;
      let b = 5;

      function foo() {
        var a, b = 20;
      }
  
      foo();
    
      // ANSWER HERE
      expect(a).toBe();
  
      // ANSWER HERE
      expect(b).toBe();
    });
  
    // //////////////////////////////////////
    // //  KATA 2
    // //////////////////////////////////////
    it('Tricky scope level 2!', () => {
      let a = 5;
      let b = 5;

      function foo() {
        var a = b = 20;
        
        return a;
      }
  
      foo();
    
      // ANSWER HERE
      expect(a).toBe();
  
      // ANSWER HERE
      expect(b).toBe();
    });
  
  
    // // //////////////////////////////////////
    // // //  KATA 3
    // // //////////////////////////////////////
    it('Sorting arrays in JS can be tricky...', () => {
      array = [6, -2, 2, -7];

      // answer here
      array.sort();
      expect(array).toBe([-7, -2, 2, 6]);
    });
  
    // // //////////////////////////////////////
    // // //  KATA 4
    // // //////////////////////////////////////
    it('Sorting arrays can be tricky I said!', () => {
      array = [6, -2, 2, -7];

      // answer here
      array.sort();
      expect(array).toBe([6, 2, -2, -7]);
    });
  
    // // //////////////////////////////////////
    // // //  KATA 5
    // // //////////////////////////////////////
    it('There are things about Js syntax we might not know, semicolons', () => {
      value = '';
      function foo() {
        return 
          value = 1;
      }
      
      foo();
  
      expect(value).toEqual();
    });
  
  
    // // //////////////////////////////////////
    // // //  KATA 6
    // // //////////////////////////////////////
    // it('Whitbread requested a getProject() functionality that will tell which teams is working in what', () => {
  
    //   wt2 = {
    //     project: 'Search Results',
    //   }
  
    //   wt1 = {
    //     project: 'Booking Flow',
    //   }
  
    //   // Cant modify the function
    //   var getProject = function(){
    //     return this.project;
    //   }
  
    //   // Use the getProject function and solve it in here!
    //   expect().toEqual('Booking Flow');
    //   expect().toEqual('search results');
    // });
  
    // //////////////////////////////////////
    // //  KATA 7
    // //////////////////////////////////////
    // it('Write a function that identifies the only even or the only odd number', () => {
  
    //   // Not allowed to pass arguments
    //   function differentNumberIdentifier(){
    //     var diffNumber;
  
    //     return diffNumber;
    //   }
  
    //   expect(differentNumberIdentifier([1,2,11])).toEqual(2);
    //   expect(differentNumberIdentifier([8,3,10])).toEqual(3);
    // });
  });