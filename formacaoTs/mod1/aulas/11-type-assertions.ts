const tipo: any = "oi";
const tipo2 = tipo as string;
const tipo3 = <string>tipo; // nao e usado mais

const literal = "literal" as "literal";
const literal2 = "literal" as const;

let tamanho: number = (tipo as string).length;

const naoSei: unknown = { a: 1, b: "outro valor" };

(naoSei as { a: number; b: string }).a;

interface AlgumaCoisa2 {
  a: number;
  b: string;
}

(naoSei as AlgumaCoisa2).a;

const d: string = 123 as unknown as string;

interface Pessoa { }
let pessoa: Pessoa = {};

interface PessoaDefinida {
  name: string;
}

let pessoa3: PessoaDefinida = {} as PessoaDefinida;

interface Respostas {
  nome: string;
  email: string;
  telefone?: string;
  endereco?: string;
}

interface Usuario {
  nome: string;
  email: string;
  telefone?: string;
  latitude?: string;
  longitude?: number;
}

const resposta: Respostas = {
  nome: "Marcos",
  email: "marcos@teste.com",
  telefone: "123456666756",
};

const usuario: Usuario = {
  nome: resposta.nome,
  email: resposta.email,
};

if (resposta.telefone) {
  usuario.telefone = resposta.telefone;
}

if (resposta.endereco) {
  const { lat, long } = geo(resposta.endereco);
  usuario.latitude = lat;
  usuario.longitude = long;
}

// funcs de validacao type guards

function isNumber(value: unknown) {
  return typeof value === "number";
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

const valor: unknown = 123;
if (isString(valor)) {
  console.log(valor.length);
}

function assertNumber(value: unknown): asserts value is number {
  if (typeof value !== "number") {
    throw new Error("Precisa de um numero");
  }
}

const valor5: unknown = 1234;
assertNumber(valor5);
valor5.toFixed();
