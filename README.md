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

Test: "It will return 1 for a word consisting only of vowels."
Code:
word = "aaa";
ruleFinder(word);
Expected Output: 1

Test: "It will return 2 for a word beginning with one or more consonants."
Code:
word = "banana";
ruleFinder(word);
Expected Output: 2

Test: "It will return 2 for a word consisting of a single consonant."
Code:
word = "b";
ruleFinder(word);
Expected Output: 2

Test: "It will return 2 for a word consisting of only consonants."
Code:
word = "bbb";
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
> This function accepts a word and returns a Pig Latin word according to the rule for vowels.

Test: "It will return a word with "way" at the end."
Code: 
word = "apple";
vowelWord(word);
Expected Output: "appleway"

Test: "It will return null if given a word that does not start with a vowel."
Code:
word = "bananas";
vowelWord(word);
Expected Output: null

Test: "It will return null if not given a string."
Code:
word = 1;
vowelWord(word);
Expected Output: null

#### function consonantWord()
> This function accepts a word and returns a Pig Latin word according to the rule for consonants.

Test: "It will return a word starting with a consonant as a word with the consonant moved to the end plus "ay"."
Code: 
word = "bananas";
consonantWord(word);
Expected Output: "ananasbay"

Test: "It will return a word starting with multiple consonants with that block of consonants at the end of the word plus "ay"."
Code:
word = "block";
consonantWord(word);
Expected Output: "ockblay"

Test: "It will return null if given a word that does not start with a consonant."
Code:
word = "apple";
consonantWord(word);
Expected Output: null

Test: "It will return null if not given a string."
Code:
word = 1;
consonantWord(word);
Expected Output: null

#### function quWord()
> This function accepts a word and returns a Pig Latin word according to the rule for consonant words including "qu".

Test: "It will return a word which has moved all letters up to "qu" to the end plus "ay"."
Code: 
word = "quit";
quWord(word);
Expected Output: "itquay"

Test: "It will correctly process the word if the qu does not come as the first two letters"
Code:
word = "squirm";
quWord(word);
Expected Output: "irmsquay"

Test: "It will return null if given a word that does not contain qu."
Code:
word = "plug";
quWord(word);
Expected Output: null

Test: "It will return null if the word starts with a vowel."
Code:
word = "apple";
quWord(word);
Expected Output: null

Test: "It will return null if given a word that starts with q but the second character is not u."
Code:
word = "qanat";
quWord(word);
Expected Output: null

Test: "It will return null if not given a string."
Code:
word = 1;
quWord(word);
Expected Output: null