/* Create a function to move from Arabic to Roman numbers*/

let arabicToRomanOneCharacter = number => {
    switch (number) {
        case 1:
            return 'I';
        case 5:
            return 'V';
        case 10:
            return 'X';
        case 50:
            return 'L';
        case 100:
            return 'C';
        case 500:
            return 'D';
        case 1000:
            return 'M';
        default:
            console.log('Enter a number 1,5,10,50,100,500,1000');

    }
}
console.log(arabicToRomanOneCharacter(5));

let arabicToRomanTwoCharacter = number => {
    switch (number) {
        case 2:
            return "II";
        case 4:
            return "IV";
        case 9:
            return "IX";
        case 6:
            return "VI";
        case 20:
            return "XX";
        case 40:
            return "XL";
        case 60:
            return "LX";
        case 90:
            return "XC";
        case 150:
            return "CL";
        case 200:
            return "CC";
        case 400:
            return "CD";
        case 600:
            return "DC";
        case 900:
            return "CM";
        case 2000:
            return "MM";
        default:
            if (number >= 3999) {
                console.log('Enter a number less than 3999');
            }
    }
}
console.log(arabicToRomanTwoCharacter(400));

let arabicToRomanThreeCharacter = number => {
    switch (number) {
        case 3:
            return "III";
        case 30:
            return "XXX";
        case 300:
            return "CCC";
        case 3000:
            return "MMM";
        default:
            if (number >= 3999) {
                console.log('Enter a number less than 3999');
            }
    }
}
console.log(arabicToRomanThreeCharacter(3000));