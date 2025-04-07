function sumaAvanzada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Ambos parámetros deben ser números');
    }
    return a + b;
  }
  
  module.exports = { sumaAvanzada };
  