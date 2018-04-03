function tripleDouble(num1, num2) {
    var str1 = num1.toString();
    var str2 = num2.toString();
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] === str1[i +1] && str1[i] === str1[i + 2]) {
            for (var j = 0; j < str2.length; j++) {
                if (str1[i] === str2[j] && str1[i] === str2[j + 1]) {
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(tripleDouble(46555, 5579));
console.log(tripleDouble(67844, 66237));