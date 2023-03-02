// Null e Undefined 
/*
* o Typescript Styleguide diz para usar apenas 
undefined. A razão é que no texto datilografado 
um ponto de interrogação é opcional. O opcional é
com undefined e não nulo
*/

// ? -> undefined

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

// o typescript entende melhor o null em checagens de decisões

export function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x;
  return null;
}

// never 
// Nós podemos utilizar o type never em funções 
// sem retorno:

function verificandoTipo(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }

  return fail("Esse método não aceita esse tipo de type!");
}

function fail(message: string): never { throw new Error(message); }

verificandoTipo(3);