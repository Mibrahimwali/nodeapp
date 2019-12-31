const maths = function (a, b, sign){
    switch(sign){
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
    }
}

module.exports= maths