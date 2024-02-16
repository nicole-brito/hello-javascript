
function reverse(string) {
    var result = "";
    for (var i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}

console.log(reverse("abcdef"));
console.log(reverse("Target Sistemas"));
console.log(reverse("Keven Kniggendorf"));