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
  if (vowelWord(word) !== null) {
    return null;
  }
  if (quWord(word) !== null) {
    return null;
  }
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      return (word.slice(i, word.length) + word.slice(0, i) + "ay");
    }
  }
  return null;
}

function quWord(word) {
  if (typeof word !== 'string') {
    return null;
  }
  if (vowelWord(word) !== null) {
    return null;
  }
  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'q' || word[i] === 'Q') {
      if (word[i+1] === 'u' || word[i+1] === 'U') {
        return (word.slice(i+2, word.length) + word.slice(0, i+2) + "ay");
      }
    }
  }
  return null;
}

function pigLatinTranslator(text) {
  wordArray = text.split(" ");
  translatedArray = [];
  wordArray.forEach(function(word) {
    let rule = ruleFinder(word);
    if (rule === -1) {
      return null;
    } else if (rule === 1) {
      translatedArray.push(vowelWord(word));
    } else if (rule === 2) {
      translatedArray.push(consonantWord(word));
    } else if (rule === 3) {
      translatedArray.push(quWord(word));
    } else {
      return null;
    }
  });
  return translatedArray.join(" ");
}

//UI Logic