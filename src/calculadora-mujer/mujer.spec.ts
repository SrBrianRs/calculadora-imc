import calcular from "./mujer";

describe('Male calcular',()=>{
    it('Altura: 1.75, Peso: 85, IMC: 27.755',() => {
      const peso = 85;
      const altura = 1.75;
      let imc = 0;

      imc = calcular(peso,altura);

      expect(imc).toBe(27.755);

    });
    it('Altura: 1.68, Peso: 74, IMC: 26.219',() => {
      const peso = 74;
      const altura = 1.68;
      let imc = 0;

      imc = calcular(peso,altura);

      expect(imc).toBe(26.219);

    });
    it('Altura: 1.50, Peso: 52, IMC: 23.111',() => {
      const peso = 52;
      const altura = 1.50;
      let imc = 0;

      imc = calcular(peso,altura);

      expect(imc).toBe(23.111);

    });
    it('Altura: 1.65, Peso: 50, IMC: 18.365',() => {
      const peso = 50;
      const altura = 1.65;
      let imc = 0;

      imc = calcular(peso,altura);

      expect(imc).toBe(18.365);

    });
    it('Altura: 1.70, Peso: 95, IMC: 32.872',() => {
      const peso = 95;
      const altura = 1.70;
      let imc = 0;

      imc = calcular(peso,altura);

      expect(imc).toBe(32.872);

    });
});