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

  isNumber() {
    let allString = this.allStrings();
    for(let element of allString) {
      if (!isNaN(parseInt(element))) {
        return "it is a number";
      }
    }
  }

  // isWord() {
  //   //loop through array until space and slice everything prior to space
  //   // create a variable that is equal to the sliced off string
  //   // check to see whether that variable/string is included in dictionary
  // }
}