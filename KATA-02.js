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
console.log(romanToArabicOneCharacter('L'));

let romanToArabicTwoCharacter = character => {
    switch (character) {
        case "II":
            return 2;
        case "XX":
            return 20;
        case "CC":
            return 200;
        case "MM":
            return 2000;
        default:
            if (character >= 'MMMCMXCIX') {
                console.log('Enter a number less than 3999');
            }
    }
}
console.log(romanToArabicTwoCharacter('MM'));

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
console.log(romanToArabicThreeCharacter('MMM'));