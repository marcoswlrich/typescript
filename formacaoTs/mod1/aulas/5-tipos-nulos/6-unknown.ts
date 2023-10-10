let a: string = "Marcos";
const b = 23;
let c: unknown = a;
c = b;
c = null;
c = undefined;
c = {};
c = [];
c = c;
c = void 0; // igual a undefined
c = 100n;

const x = c;

// Todos os tipos podem ser associados a unknown, mas nap se pode associar um tipo
// ja direcionado para unknow. Ex: Uma variavel do tipo string nao pode receber uma
// variavel do tipo Unknow. Unknow -> pai de todos os tipos
