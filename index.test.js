const { sumaAvanzada } = require('./index');

test('Suma de 3 + 4 debe dar 7', () => {
  expect(sumaAvanzada(3, 4)).toBe(7);
});

test('Error si se pasa una cadena de texto', () => {
  expect(() => sumaAvanzada(3, "a")).toThrow("Ambos parámetros deben ser números");
});
