# Haiku Detector

  ### By Taylor Somers & Chris Yoon

## Description

  This program is a work in progress created over two days as part of Epicodus's introduction to test-driven development. It was created with JavaScript and displays our ongoing process of understanding test-driven development via WebPack and Jest. While unfinished at this point due to time constraints, it should be a useful document of the increasing sophistication with which we are able to navigate the iterative team-based development process.

## Languages & Technologies Used:

  ### Programming Languages & Libraries
  * JavaScript
  * Node
  * WebPack

  ### Operating Systems & Programs
  * Git Bash
  * Microsoft Windows 10
  * Visual Studio Code

## Installation

  1.  Download a web browser, such as Apple Safari, Brave, Google Chrome, Microsoft Edge, Mozilla Firefox, or Yandex.
  2.  Navigate to https://github.com/taylorsomers/haiku.
  3.  Click the green "Clone or download" button at the right of the screen.
  4.  Select "Download ZIP."
  5.  Use a file extractor or unzip program (such as PeaZip, Unzipper, WinZip, Zipware, or 7-ZIP) to extract the ZIP files onto your computer.
  6.  Open the directory containing the extracted files.
  7.  Open your computer's terminal and navigate to the directory bearing the name of the program and containing the top level subdirectories and files.
  8.  Enter the command "$ npm install" in the terminal and press "Enter".
  9.  Enter the command "$ npm run build" in the terminal and press "Enter".
  10. Enter the command "$ npm run start" in the terminal and press "Enter".
  11. The program should open and run with its user interface accessible in your default web browser.

## Specifications

  | Program Behavior | Example Behavior | Example Output |
  | ----------- | ----------- | ----------- |
  |The Program checks if the user inputs are alphabetical characters| I love you 2 | "Please do not use non-alphabetical character" |
  |The Program detects if the user inputted words are actual words | asdfk | "not a word" | 
  |The Program confirms that the user input contains 3 lines| "My shining surfboard -- hovering over the sea -- Part of my body" | "Nice Haiku bro" |
  | The program will determine where one word ends and the next begins | "My shining surfboard -- hovering over the sea -- Part of my body" | N/A |
  |The Program confirms that there are 5 syllables in the first line | "My shining surfboard -- hovering over the sea -- Part of my body" | "Nice Haiku bro" |
  |The Program confirms that there are 7 syllables in the second line | "My shining surfboard -- hovering over the sea -- Part of my body" | "Nice Haiku bro" |
  |The Program confirms that there are 5 syllables in the third line | "My shining surfboard -- hovering over the sea -- Part of my body" | "Nice Haiku bro" |


## Known Bugs

  * Apart from being unfinished at this time and lacking functionality to do more thorough analysis than counting standard vowels in inputted lines of poetry, no known bugs. If any are discovered, please feel free to reach out and let me know. If you would like to contribute any fixes or improvements, please do!

### Contributors

  * Taylor Somers
  * Chris Yoon

### License

This website is licensed under the GNU General Public License GPLv3. (C) 2020 Taylor Somers, Chris Yoon. All rights reserved.