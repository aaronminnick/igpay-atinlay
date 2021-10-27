//Utility Functions

//Business Logic

function ruleFinder(word) {
  if (typeof word !== 'string') {
    return -1;
  }

  word = word.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(word[0])) {
    return 1;
  }

  if (word.length === 1) {
    return 2;
  }

  for (let i = 0; i < word.length; i++) {
   if (word.length-1 === i) {
     return 2;
   }
   if (vowels.includes(word[i+1])) {
        if (word[i] === 'q') {
          if (word[i+1] === 'u') {
            return 3;
          } else {
            return 2;
          }
        } else {
          return 2;
        }
    }
  }
  return -1;
}

function vowelWord(word) {
  if (typeof word !== 'string') {
    return null;
  }
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (!vowels.includes(word[0])) {
    return null;
  }
  return word.concat("way");
}

function consonantWord() {

}

function quWord() {

}

//UI Logic