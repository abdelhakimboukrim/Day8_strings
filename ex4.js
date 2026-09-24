function countVowels(str){
    let count=0
    let vaoules="aeiou"
    for(letter of str.toLowerCase() ){
        if (vaoules.includes(letter)) count++;
    }
    return count
}

console.log(countVowels("JavaScript Bootcamp AA"));
