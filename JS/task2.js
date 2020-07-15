function generateFibonacciSequence (n) {
    var fibo = [1, 1];
    if (n == 0) {
        var fibo = null;
    }
    if (n == 1) {
        var fibo = [1];
    }
    for (var i = 2; i < n; i++) {
        fibo.push (fibo[i-2] + fibo[i-1]);
    }
    return fibo;
}
console.log (generateFibonacciSequence(10));