function q1RemoverDuplicados(nums) {
    /**
     * Retorna uma lista com apenas um registro de cada elemento
     * 
     * Saída esperada: [1, 2, 3, 4, 5]
    */
    return nums.filter((item, index) => nums.indexOf(item) === index);
  }
  
  console.log(q1RemoverDuplicados([1, 2, 2, 3, 4, 4, 5]));