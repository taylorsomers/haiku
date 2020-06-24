import { Poem } from './../src/haiku.js';

describe('Poem', () => {

  test('should create a poem object with three arrays', () => {
    const poem = new Poem();
    expect(poem.lineOne).toEqual([]);
    expect(poem.lineTwo).toEqual([]);
    expect(poem.lineThree).toEqual([]);
  });
  
  test('should populate poem object line properties with inputted content', () => {
    let poem = new Poem();
    poem.addLine("hi","bye","bro");
    expect(poem.lineOne[0]).toEqual("hi");
    expect(poem.lineTwo[0]).toEqual("bye");
    expect(poem.lineThree[0]).toEqual("bro");
  });

  test('should correctly identify if a character is a number', () => {
    let poem = new Poem();
    poem.lineOne[0] = "aslasdf5";
    poem.lineTwo[0] = "4";
    poem.lineThree[0] = "a";
    expect(poem.isNumber()).toEqual("it is a number");
  });
});