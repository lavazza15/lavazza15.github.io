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

function ShuffleArray(names) {
    for (var i = names.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [names[i], names[j]] = [names[j], names[i]];
    }
      return names;
}

//задача з презентації

var array = [-4, 48, 22, -22, 15, 7, 155, -3, 18, 99];

function maxElement(array) {
    var sumP = 0;
    var prodN = 1;
    var countP = 0;
    var countN = 0;

    for(var i = 0; i < array.length; i++) {
        if (array[i]>=0) {
            countP++;
            sumP += array[i];
        }
        else {
            countN++;
            prodN *= array[i];
        }
    }

    return {
        max: Math.max(...array),
        min: Math.min(...array),
        sumP: sumP,
        prodN: prodN,
        countP: countP,
        countN: countN
    };
}
