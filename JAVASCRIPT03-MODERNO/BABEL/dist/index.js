"use strict";

// MÉDIA ARITMÉTICA SIMPLES
var mediaSimples = function mediaSimples() {
  for (var _len = arguments.length, numeros = new Array(_len), _key = 0; _key < _len; _key++) {
    numeros[_key] = arguments[_key];
  }
  var total = numeros.length;
  var soma = numeros.reduce(function (acc, numero) {
    return acc + numero;
  }, 0);
  return soma / total;
};

// MÉDIA ARITMÉTICA PONDERADA
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, numeros = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numeros[_key2] = arguments[_key2];
  }
  var soma = numeros.reduce(function (acc, numero) {
    var _numero$p;
    return acc + ((_numero$p = numero.p) !== null && _numero$p !== void 0 ? _numero$p : 1);
  }, 0);
  var somaPeso = numeros.reduce(function (acc, _ref) {
    var n = _ref.n,
      p = _ref.p;
    return acc + n * (p !== null && p !== void 0 ? p : 1);
  }, 0);
  return somaPeso / soma;
};

// MEDIANA
var mediana = function mediana() {
  for (var _len3 = arguments.length, numeros = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numeros[_key3] = arguments[_key3];
  }
  var numerosOrd = [].concat(numeros);
  numerosOrd.sort(function (a, b) {
    return a - b;
  });
  var total = numeros.length;
  if (total % 2 == 0) {
    var meio01 = total / 2 - 1;
    var meio02 = meio01 + 1;
    var _mediana = mediaSimples(numerosOrd[meio01], numerosOrd[meio02]);
    return _mediana;
  } else {
    var pos = Math.round(total / 2 - 1);
    var _mediana2 = numerosOrd[pos];
    return _mediana2;
  }
};

// MODA
var moda = function moda() {
  for (var _len4 = arguments.length, numeros = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numeros[_key4] = arguments[_key4];
  }
  var modaPos = 0;
  var maior = 0;
  var quantAtual = 0;
  var _loop = function _loop(i) {
    numeros.forEach(function (numero) {
      if (numeros[i] === numero) {
        quantAtual++;
      }
    });
    if (quantAtual >= maior) {
      maior = quantAtual;
      modaPos = i;
    }
    quantAtual = 0;
  };
  for (var i = 0; i <= numeros.length; i++) {
    _loop(i);
  }
  var moda = numeros[modaPos];
  return moda;
};
var modaObc = function modaObc() {
  for (var _len5 = arguments.length, numeros = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    numeros[_key5] = arguments[_key5];
  }
  var quantidades = numeros.map(function (num) {
    return [num, numeros.filter(function (n) {
      return num === n;
    }).length];
  });
  quantidades.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantidades[0][0];
};