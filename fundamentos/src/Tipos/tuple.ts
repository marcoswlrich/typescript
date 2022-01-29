/*A  grande diferença entra as duas é que 
nos array’s nós trabalhamos somente com 
um tipo de dado e com as tuplas com diferentes
tipos */
//Tuple
const tupla: [number, string] = [2, 'Marcos'];
tupla[0] = 100;
tupla[1] = 'pedro';

const tupla2: [string, number, ...string[]]= ['maria', 29, 'pedro', 'joão', 'paulo'];

console.log(tupla);
console.log(tupla2);

// array imutavel -> readonly
const array1: readonly string[] = ['Marcos', 'Wlrich'];
const array2: ReadonlyArray<string> = ['Marcos', 'Wlrich'];