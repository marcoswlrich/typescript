/*
 *  A tipagem estrutural é uma maneira de 
 * relacionar tipos com base apenas em seus 
 * membros. Isso está em contraste com a tipagem 
 * nominal.
 */

interface Pet {
  name: string;
}
let pet: Pet;
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
pet = dog;