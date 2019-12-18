let divisibleBy = (array) => {
    for (let index of array) {
        let messageDivisible = '';
        let messageContains = '';
        if (index % 3 === 0) {
            messageDivisible += 'Foo';
        }
        if (index % 5 === 0) {
            messageDivisible += 'Bar';
        }
        if (index % 7 === 0) {
            messageDivisible += 'Quix';
        }
        for (let number of Array.from(`${index}`)) {
            if (number == 3) {
                messageDivisible += 'Foo';
            }
            if (number == 5) {
                messageDivisible += 'Bar';
            }
            if (number == 7) {
                messageDivisible += 'Quix';
            }
        }
        const messageEnd = messageDivisible + messageContains;
        if (messageEnd !== '') {
            console.log(messageEnd);
        } else {
            console.log(`${index}`);
        }
    }
}
divisibleBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 15, 21, 33, 51, 53, 75]);