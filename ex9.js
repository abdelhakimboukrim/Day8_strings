function  countOccurrences(text, keyword){
   let x=0
    for(let i=0;i<text.length;i++){
     if (text.slice(i,i+keyword.length)===keyword){
        x++
     }
   
  }return x;
}
console.log(countOccurrences("the cat sat on the mat with the hat", "the"))
