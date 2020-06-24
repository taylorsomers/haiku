import { Poem } from './../src/haiku.js';

describe('Poem', () => {
  let reusablePoem;
  
  beforeEach(() => {
    reusablePoem = new Poem();
  });
  
  test('should create a reusablePoem object with three arrays', () => {
    expect(reusablePoem.lineOne).toEqual([]);
    expect(reusablePoem.lineTwo).toEqual([]);
    expect(reusablePoem.lineThree).toEqual([]);
  });
  
  test('should populate reusablePoem object line properties with inputted content', () => {
    reusablePoem.addLine("hi","bye","bro");
    expect(reusablePoem.lineOne[0]).toEqual("hi");
    expect(reusablePoem.lineTwo[0]).toEqual("bye");
    expect(reusablePoem.lineThree[0]).toEqual("bro");
  });

  test('should correctly identify if a character is a number', () => {
    reusablePoem.lineOne[0] = "aslasdf5";
    reusablePoem.lineTwo[0] = "4";
    reusablePoem.lineThree[0] = "a";
    expect(reusablePoem.isNumber()).toEqual("it is a number");
  });

  test('should concatenate all lines of the reusablePoem', () => {
    reusablePoem.lineOne[0] = "aslasdf5";
    reusablePoem.lineTwo[0] = "4";
    reusablePoem.lineThree[0] = "a";
    expect(reusablePoem.allStrings()).toEqual("");
  });
});