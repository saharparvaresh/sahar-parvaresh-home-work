const maxFunc = (...inputArr) => {
    let bignumber = BigInt(Number.MAX_SAFE_INTEGER);
    if (inputArr.length <= 0) {
        console.log("null");
    } else {
        let maxnumber;
        let convBigInt = new Array;
        for (let i = 0; i < inputArr.length; i++) {
            convBigInt.push(parseFloat(inputArr[i]));
            maxnumber = Math.max(...convBigInt)
        }

        if (Number.isInteger(maxnumber) && maxnumber <= Number(bignumber)) {
            console.log(BigInt(maxnumber));
        } else {
            console.log("Big Error");
        }
    }
}

maxFunc(2 ** 53 - 1)