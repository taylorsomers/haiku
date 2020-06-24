import { Poem } from './../src/haiku.js';

describe('Poem', () => {

  test('should create a poem object with three arrays', () => {
    const poem = new Poem();
    expect(poem.lineOne).toEqual([]);
    expect(poem.lineTwo).toEqual([]);
    expect(poem.lineThree).toEqual([]);
  });
  
  // test('should ')
  //tests whether the line contains any unwanted nonalphanum char
});