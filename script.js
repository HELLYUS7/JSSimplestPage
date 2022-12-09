var a = document.getElementById('div');
a.style.borderRight='solid 5px black';
var textA = a.innerHTML;
var text = ''
var i = 0;
setInterval(() => {
    a.innerHTML = text;
    text = text + textA[i];
    i++;
    if (i >= textA.length+1) {
        text = '';
        i = 0;
    }
}, 100);