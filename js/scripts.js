//Utility Functions

//Business Logic

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function ruleFinder(word) {
  if (typeof word !== 'string') {
    return -1;
  }

  word = word.toLowerCase();
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
  if (!vowels.includes(word[0])) {
    return null;
  }
  return word.concat("way");
}

function consonantWord(word) {
  if (typeof word !== 'string') {
    return null;
  }
  if (vowels.includes(word[0])) {
    return null;
  }
  let consonantBlock = "";
  let backHalf = "";
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      consonantBlock = word.slice(0, i);
      backHalf = word.slice(i, word.length);
      break;
    }
  }
  return (backHalf + consonantBlock + "ay");
}

function quWord() {

}

//UI Logic