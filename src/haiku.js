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
    for(const element of this.lineOne) {
      if (!isNaN(parseInt(element))){ //
        return "it is a number";
      } else{
        return "is a not number";
      }
    }
  }
}