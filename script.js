function calcul(str) {
    var countLength = 0;
    var countWords = 0;
    var countVowel = 0;
  
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = 0; i < str.length; i++) {
        countLength++;
  
      if (str[i] === ' ') {
        countWords++;
      }
  
      if (vowels.includes(str[i])) {
        countVowel++;
      }
    }
      countWords += 1;
  
    return {
      countLength,
      countWords,
      countVowel
    };
  }