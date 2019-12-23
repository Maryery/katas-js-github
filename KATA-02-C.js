/* Make a Roman numeral validator*/

let validator = roman => {
    const characters = Array.from(roman);
    const lettersCorrect = ["I", "V", "X", "L", "C", "D", "M"];
    for (let character of characters) {
        if (lettersCorrect.includes(character) == false) {
            return false;
        }
    }
    return true;
}
console.log(validator('MCMXCIX'));