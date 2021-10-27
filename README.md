## Specs:
1. For words beginning with a vowel, add "way" to the end.
2. For words beginning with one or more consonants, all of the first consecutive consonants move to the end of the word and "ay" is added.
3. If the first consonants include "qu", the "q" and the "u" are both moved to the end. This should include words where "q" is not the first character (example: squeal).
4. The web application should take input from a user to be "translated".
5. The web application should display the results of the translation on the page once the program has run.
6. The original text and the translation should appear in two adjacent columns, similar to google translate.
7. The application should prompt the use to enter a text, if they try to submit without entering any text (perhaps prompt them in pig latin: "erEntay omeSay exTay!")
8. The webpage will look dope.

## Tests:

#### function ruleFinder()
> This function tests a word to determine which rule of Pig Latin applies.

Test: "It will accept a string and return a number."
Code:
word = "word";
ruleFinder(word);
Expected Output: 1

Test: "It should return -1 if it is fed a multi-word string."
Code:
word = "apple banana";
ruleFinder(word);
Expected Output: -1

Test: "It should return -1 if it is given a primitive that is not a string."
Code:
word = 1;
ruleFinder(word);
Expected Output: -1

Test: "It should recognize letters regardless of case."
Code:
word = "APPLE"
ruleFinder(word);
Expected Output: 1

Test: "It will return 1 for a word beginning with a vowel."
Code:
word = "apple";
ruleFinder(word);
Expected Output: 1

Test: "It will return 2 for a word beginning with one or more consonants."
Code:
word = "banana";
ruleFinder(word);
Expected Output: 2

Test: "It will return 3 for a consonant-leading word which includes qu in the first block of letters to be moved."
Code:
word = "quit";
ruleFinder(word);
Expected Output: 3

Test: "It will return rule 2 for a q word which does not require qu to be moved."
Code:
word = "qanat";
ruleFinder(word);
Expected Output: 2

#### function vowelWord()


#### function consonantWord()


#### function quWord()