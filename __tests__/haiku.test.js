import { Poem } from './../src/haiku.js';

describe('Poem', () => {
  let reusablePoem;
  
  beforeEach(() => {
    reusablePoem = new Poem();
    reusablePoem.lineOne[0] = "my shining surfboard";
    reusablePoem.lineTwo[0] = "hovering over the sea";
    reusablePoem.lineThree[0] = "part of my body";
  });
  
  test('should create a reusablePoem object with three arrays', () => {
    expect(reusablePoem.lineOne[0]).toEqual("my shining surfboard");
    expect(reusablePoem.lineTwo[0]).toEqual("hovering over the sea");
    expect(reusablePoem.lineThree[0]).toEqual("part of my body");
  });

  test('should populate reusablePoem object line properties with inputted content', () => {
    let inputLine1 = "word5";
    let inputLine2 = "4";
    let inputLine3 = "a";
    let newPoem = new Poem();
    newPoem.addLine(inputLine1, inputLine2, inputLine3);
    expect(newPoem.lineOne[0]).toEqual("word5");
  });

  test('should correctly identify if a character is a number', () => {
    reusablePoem.lineOne[0] = "word5";
    reusablePoem.lineTwo[0] = "4";
    reusablePoem.lineThree[0] = "a";
    expect(reusablePoem.isNumber()).toEqual("it is a number");
  });

  test('should concatenate all lines of the reusablePoem', () => {
    reusablePoem.lineOne[0] = "word5";
    reusablePoem.lineTwo[0] = "4";
    reusablePoem.lineThree[0] = "a";
    expect(reusablePoem.allStrings()).toEqual("word54a");
  });

  test('should create an array of words in the given allStringArray', () => {
    let allStringArray = reusablePoem.isWord();
    expect(allStringArray[0]).toEqual("my");
  });

  test('should track the number of syllables per line', () => {
    expect(reusablePoem.countSyllables()[0]).toEqual(5);

    // countSyllables() {
    //   let numOfSyllable =0
    //   countVowels()[0][0] += numOfSyllable
    //   ify[0][0]
    }

  });

  test('should split lines into arrays of words', () => {
    expect(reusablePoem.splitLines()[0]).toEqual(["my","shining","surfboard"]);
  });

  test('should count the number of vowels in each word', () => {
    expect(reusablePoem.countVowels()[0][1]).toEqual(2);
  });
});