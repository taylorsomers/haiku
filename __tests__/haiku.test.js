import { Poem } from './../src/haiku.js';

describe('Poem', () => {

  test('should create a poem object with three line syllable counts', () => {
    const poem = new Poem(1,2,3);
    expect(poem.line1SyllableCount).toEqual(1);
    expect(poem.line2SyllableCount).toEqual(2);
    expect(poem.line3SyllableCount).toEqual(3);
  });
});