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

  countSyllables() {
    
    // let numOfSyllable = 0; //+= numOfSyllable
    let syllablesPerLine = [];
    let syllableCountLine1= [];  // [my 0,shining 2,  suerfgbb 3]
    let syllableCountLine2= [];
    let syllableCountLine3= [];
    
    for (let i = 0; i < (this.countVowels()).length; i++) { // loop through each line of this.countVowels()
      if (i === 0) {
        syllableCountLine1.push(this.countVowels()[i]); // push vowel count of each word into line array
      } else if (i === 1) {
        syllableCountLine2.push(this.countVowels()[i]);
      } else {
        syllableCountLine3.push(this.countVowels()[i]);
      }
    }

    
    syllablesPerLine.push(syllableCountLine1);
    syllablesPerLine.push(syllableCountLine2);
    syllablesPerLine.push(syllableCountLine3);
  }
}