const assert = require('assert');
const { Given, When, Then, And } = require('@cucumber/cucumber');
 
const calculadora = {
  resultado: 0,
 
  suma(operando){
    this.resultado = this.resultado + parseInt(operando);
  },
  resta(operando){
    this.resultado = this.resultado - parseInt(operando);
  }
}

this.Given(/^la API listar los pokémon de la api mencionada según los datos de paginación de (.+) y (.+)$/, function (offset, limit, callback) {
  callback.pending();
});

this.Then(/^Listar pokemones$/, function (callback) {
  callback.pending();
});
 
  Given(/^Un valor de partida de (.*)$/, (cantidad) => {
    calculadora.resultado = parseInt(cantidad);
    console.log(`inicio: ${calculadora.resultado}`);
  });

  When(/^se le suma (.*)$/, (cantidad) => {
    calculadora.suma( cantidad);
    console.log(`suma: ${calculadora.resultado}`);
  });

  When(/^se le resta (.*)$/, (cantidad) => {
    calculadora.resta( cantidad);
    console.log(`resta: ${calculadora.resultado}`);
  });

  Then(/^el resultado debe ser (.*)$/, (cantidadEsperada) => {
    console.log(`cantidad esperada: ${cantidadEsperada}`);
    assert.strictEqual(calculadora.resultado, parseInt(cantidadEsperada));
  });

 