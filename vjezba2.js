//var text = 'RIMAC';

//treba da trensformišemo ovaj text da piše ACIMR

function poredaj(RIMAC) {
    var poredaj = RIMAC.split("")
    var ispisi = poredaj.sort().join('');
    return ispisi;
}

console.log(poredaj ("RIMAC"));

