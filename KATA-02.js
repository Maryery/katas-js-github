/* Crear una función para pasar de números romanos a árabes*/

let romanToArabicOneCharacter = character => {
        switch (character) {
            case "I":
                return 1;
            case "V":
                return 5;
            case "X":
                return 10;
            case "L":
                return 50;
            case "C":
                return 100;
            case "D":
                return 500;
            case "M":
                return 1000;
            default:
                if (character >= 'MMMCMXCIX') {
                    console.log('Enter a number less than 3999');
                }
        }
    }
    //console.log(romanToArabicOneCharacter('L'));

let romanToArabicTwoCharacter = character => {
        switch (character) {
            case "II":
                return 2;
            case "IV":
                return 4;
            case "IX":
                return 9;
            case "VI":
                return 6;
            case "XX":
                return 20;
            case "XL":
                return 40;
            case "LX":
                return 60;
            case "XC":
                return 90;
            case "CL":
                return 150;
            case "CC":
                return 200;
            case "CD":
                return 400;
            case "DC":
                return 600;
            case "CM":
                return 900;
            case "MM":
                return 2000;
            default:
                if (character >= 'MMMCMXCIX') {
                    console.log('Enter a number less than 3999');
                }
        }
    }
    //console.log(romanToArabicTwoCharacter('MM'));

let romanToArabicThreeCharacter = character => {
        switch (character) {
            case "III":
                return 3;
            case "XXX":
                return 30;
            case "CCC":
                return 300;
            case "MMM":
                return 3000;
            default:
                if (character >= 'MMMCMXCIX') {
                    console.log('Enter a number less than 3999');
                }
        }
    }
    //console.log(romanToArabicThreeCharacter('MMM'));

let convertRoman = roman => {
    const characters = Array.from(roman);
    let lettersRepeated = '';
    const blocks = [];

    for (let character of characters) {

        if (lettersRepeated !== "" && lettersRepeated.slice(-1) === "V" &&
            (character === "I")) {
            blocks.push(lettersRepeated)
            lettersRepeated = ""
        }

        if (lettersRepeated !== "" && lettersRepeated.slice(-1) === "X" &&
            (character === "I" || character === "V")) {
            blocks.push(lettersRepeated)
            lettersRepeated = ""
        }

        if (lettersRepeated !== "" && lettersRepeated.slice(-1) === "C" &&
            (character === "I" || character === "V" || character === "X" || character === "L")) {
            blocks.push(lettersRepeated)
            lettersRepeated = ""
        }

        if (lettersRepeated !== "" && lettersRepeated.slice(-1) === "M" &&
            (character === "I" || character === "V" || character === "X" || character === "L" || character === "C" || character === "D")) {
            blocks.push(lettersRepeated)
            lettersRepeated = ""
        }

        if (lettersRepeated == '') {
            lettersRepeated += character;

        } else if (lettersRepeated.slice(-1) === character) {
            lettersRepeated += character;

        } else if (lettersRepeated.slice(-1) === "I" && character === "V") {
            lettersRepeated += character;

        } else if (lettersRepeated.slice(-1) === "I" && character === "X") {
            lettersRepeated += character;

        } else if (lettersRepeated.slice(-1) === "V" && character === "I") {
            lettersRepeated += character;

        } else if (lettersRepeated.slice(-1) === "X" && character === "L") {
            lettersRepeated += character;

        } else if (lettersRepeated.slice(-1) === "L" && character === "X") {
            lettersRepeated += character;

        } else if (lettersRepeated.slice(-1) === "X" && character === "C") {
            lettersRepeated += character;

        } else if (lettersRepeated.slice(-1) === "C" && character === "L") {
            lettersRepeated += character;

        } else if (lettersRepeated.slice(-1) === "C" && character === "D") {
            lettersRepeated += character;

        } else if (lettersRepeated.slice(-1) === "D" && character === "C") {
            lettersRepeated += character;

        } else if (lettersRepeated.slice(-1) === "C" && character === "M") {
            lettersRepeated += character;

        } else {}

    }

    blocks.push(lettersRepeated);

    let result = 0;
    for (let block of blocks) {
        switch (block.length) {
            case 1:
                result += romanToArabicOneCharacter(block);
                break;
            case 2:
                result += romanToArabicTwoCharacter(block);
                break;
            case 3:
                result += romanToArabicThreeCharacter(block);
                break;
            default:
                break;
        }
    }
    return result;
}

console.log(convertRoman('MMXIX'));

/* Hacer un validador de números romanos*/

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