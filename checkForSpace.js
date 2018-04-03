function checkForSpace(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a") {``
            if (str[i + 4] === "b" || str[i - 4] === "b") {
                return true
            }
        }
    }
    return false
}

console.log('------------')
console.log(checkForSpace("lane borrowed"))
console.log(checkForSpace("about a boy"))
