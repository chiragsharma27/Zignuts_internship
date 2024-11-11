function sumNumbersInString(str) {
    let sum = 0;
    let num = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            num += str[i];
        } else if (num !== '') {
            sum += parseInt(num);
            num = '';
        }
    }
    if (num !== '') {
        sum += parseInt(num);
    }

    if (isNaN(sum)) {
        return 0;
    } else {
        return sum;
    }
}

const inputString = "foo8bar8cat2tc2a9";
const result = sumNumbersInString(inputString);
console.log(result);
