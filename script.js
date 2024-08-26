var km = document.querySelector('#km');
var litri = document.querySelector('#litri');
var butonCalc = document.querySelector('#calculateBtn');

var consumFinal = document.querySelector('#consumFinal');

butonCalc.addEventListener('click', function() {
    // 80l => 1500 km
    // ? l => 100 km
    if(litri.value == '' || km.value == '') {
        alert('Completeaza toate campurile inainte de calcul!');
        return;
    }

    var result = (100 * litri.value) / km.value;

    consumFinal.innerHTML = result.toFixed(1);
});