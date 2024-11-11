function sumNumbersInString(str) {
    let sum = 0;
    let num = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ',') {
            if (num !== '') {
                sum += parseFloat(num);
                num = '';
            }
        } else {
            num += str[i];
        }
    }

    if (num !== '') {
        sum += parseFloat(num);
    }

    if (isNaN(sum)) {
        return 0;
    } else {
        return sum;
    }
}

const inputString = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
const result = sumNumbersInString(inputString);
console.log(result);

