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

  isNumber() {
    let allString = this.lineOne[0].concat(this.lineTwo[0], this.lineThree[0]);
    for(let element of allString) {
      if (!isNaN(parseInt(element))) {
        return "it is a number";
      }
    }
  }
}