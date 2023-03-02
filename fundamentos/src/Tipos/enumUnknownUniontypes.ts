// Enum

/*
 *  Enum nos permite declarar um conjunto de 
 * valores/constantes pré-definidos.
*/

export enum DiaDaSemana {
  Segunda = 1,
  Terca = 2,
  Quarta = 3,
  Quinta = 4,
  Sexta = 5,
  Sabado = 6,
  Domingo = 7,
}

let dia = DiaDaSemana[1]; // Segunda
// let diaNumero = DiaDaSemana[dia]; // 1
// let diaString= DiaDaSemana["Segunda"]; // 1

export enum Cores {
  Azul,
  Amarelo,
  Verde,
  Vermelho
}

var cor = Cores[1]; // Amarelo
// var corNumero = Cores[cor]; // 1
// var corString= Cores["Vermelho"]; // 3

// Unkdown

/*
 *  Principal diferença entre unknown e any é que 
 * unknown é muito menos permissivo do que any: 
 * temos que fazer alguma forma de verificação antes 
 * de realizar a maioria das operações em valores 
 * de tipo unknown, enquanto não precisamos fazer 
 * nenhuma verificação antes de executar operações 
 * em valores de tipo any.
 */

let a: any;
a = 10;
a = 'Marcos';
a = 8
let b = '10';
console.log(a + b);

let y: unknown;
y = 'Marcos';
y = 8;
// para evitar erros
if (typeof y === 'number') console.log(a + y);

// Union Types

/*
 * O TypeScript nos permite usar mais de um tipo 
 * de dados para uma variável ou parâmetro de 
 * função
 */

interface Moment {
  utcOffset(): number;
  utcOffset(b: number | string): Moment;
}

