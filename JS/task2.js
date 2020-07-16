//функція для генерації послідовності Фібоначчі

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

//функія для перемішування елементів масиву
var names = [];
function ShuffleArray(names) {
    for (var i = names.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [names[i], names[j]] = [names[j], names[i]];
    }
      return names;
}