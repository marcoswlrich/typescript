// formas de escrever arrays Array<T> ou T[]

function multArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1);

}

const resultado = multArgs(2, 3, 3);

console.log(resultado);