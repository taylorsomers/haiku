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
    return lineArray;
  }

  countVowels() { // Function will add 1 to count each time a syllable is detected
    let vowelCountArray1 = [];
    let vowelCountArray2 = [];
    let vowelCountArray3 = [];     //vowelcountarray[0] = [0,2,3], vowelcountarray[1] = [3,2,2]
    let loop =0;
    for (let eachLineArray of this.splitLines()) {
      for(let eachWord of eachLineArray) {
        let vowelCountPerWord = 0;
        for(let letter of eachWord) {
          const regex = /[aeiou]/g;
          if(letter.match(regex)) {
            vowelCountPerWord += 1;  // will = the number of vowels in each word.
          }  
        }
        if (loop === 0){        //1 push the 
          vowelCountArray1.push(vowelCountPerWord);    //will push the total vowels in each word.
        }
        else if (loop === 1){
          vowelCountArray2.push(vowelCountPerWord);
        }
        else if (loop === 2){
          vowelCountArray3.push(vowelCountPerWord);
        }
        vowelCountPerWord = 0;
      }
      loop += 1;
    }
    let vowelCountPerline = [];
    vowelCountPerline.push(vowelCountArray1);
    vowelCountPerline.push(vowelCountArray2);
    vowelCountPerline.push(vowelCountArray3);

    return vowelCountPerline;
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