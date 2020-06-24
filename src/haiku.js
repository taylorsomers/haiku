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
}


// unwanted() {
//   //access the line, method to go thru each char in the line, and flag unwanteds.