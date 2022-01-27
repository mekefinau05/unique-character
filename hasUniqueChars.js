// Write your code below

function hasUniqueChar(word) {

    let asciiArray = []
    let asciiNum = 0

    for(let i = 0; i < word.length; i++) {
    asciiNum = word.charCodeAt(i);
    asciiArray.push(asciiNum)
    }
    for(let i = 0; i < asciiArray.length; i++) {
    
        for(let j = 0; j < asciiArray.length; j++) {

            if(asciiArray[i] === asciiArray[j] && i !== j) {

                return false;
            }
        }
        
    }
    return true;
}
console.log(hasUniqueChar("Moonday"))
