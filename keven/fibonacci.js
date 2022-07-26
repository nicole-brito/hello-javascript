var n = 13;
var a = 0;
var b = 1;
var c = 0;
var fibonacci = [];
fibonacci[0] = a;
fibonacci[1] = b;
for (var i = 2; i < n; i++) {
    c = a + b;
    a = b;
    b = c;
    fibonacci[i] = c;
}
if (fibonacci.indexOf(n) > -1) {
    console.log("O número " + n + " pertence à sequência de Fibonacci");
} else {
    console.log("O número " + n + " não pertence à sequência de Fibonacci");
}
