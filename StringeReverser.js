
function reverseString() {

    var input = document.getElementsByName('words')[0].value;

    var reversed = input.split('').reverse().join('');

    document.getElementById('output').innerText = reversed;

}
