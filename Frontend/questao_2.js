function q2ContarFrequenciaPalavra(text) {
    const control = text.toLowerCase().split(' ');
    const controlSet = new Set(control);
    const sortingList = [];
    let maior = 0;
    let menor = 0;
  
    const dictionary = {};
  
    for (const word of controlSet) {
      const num = control.filter(item => item === word).length;
  
      if (num > menor) {
        if (num < maior) {
          sortingList.push(word);
        } else if (num > maior) {
          maior = num;
          sortingList.unshift(word);
        }
      }
    }
  
    for (const name of sortingList) {
      dictionary[name] = control.filter(item => item === name).length;
    }
  
    return dictionary;
  }
console.log(q2ContarFrequenciaPalavra("Hello world hello"));