export class Poem {
  constructor() {
    this.lineOne = [];
    this.lineTwo = [];
    this.lineThree = [];
  }

  addLine(inputLine1, inputLine2, inputLine3) {
    this.lineOne.push(inputLine1);
    this.lineTwo.push(inputLine2);
    this.lineThree.push(inputLine3);
  }

  allStrings() {
    let allString = this.lineOne[0].concat(this.lineTwo[0], this.lineThree[0]);
    return allString;
  }

  splitLines() {
    let lineArray = [];
    lineArray.push(this.lineOne[0].split(" "));
    lineArray.push(this.lineTwo[0].split(" "));
    lineArray.push(this.lineThree[0].split(" "));
    console.log(lineArray[0]);
    return lineArray;
  }

  countVowels() { // Function will add 1 to count each time a syllable is detected
    let vowelCount = 0;
    let lineArray = this.lineArray[0].split(" ");

    //reusablePoem.lineOne.countSyllables()
    
    for (let element of lineArray) {
      for(let letter of element){
        const regex = /[aeiou]/g;
        if(letter.match(regex)){
          vowelCount += 1;
        } 
      }
    }
    return vowelCount;
  }

  isNumber() {
    let allString = this.allStrings();
    for(let element of allString) {
      if (!isNaN(parseInt(element))) {
        return "it is a number";
      }
    }
  }

  isWord() {
    let allString = this.allStrings();
    let allStringArray = allString.split(" "); 
    return allStringArray;
  }
}