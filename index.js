// Primer Ejecucion: Explica toda funcion puede recibir como parametro otra funcion
function suma(num1, num2) {
    return num1 + num2;
}
function calcular(num1, num2, callback) {
    return callback(num1, num2);
}
console.log(calcular(6, 8, suma));
console.log('**');
//  Segunda Ejecucion: Toda la logica de dos funciones puede estar almacenada en una
function date(callback) {
    setTimeout(() => {
        let date = new Date;
        callback(date);
        console.log('************************');
    }, 3000);
    console.log(new Date);
};

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);
// console.log('************************');