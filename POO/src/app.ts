import { ContaBancaria } from './models/ContaBancaria';

const conta1 = new ContaBancaria();
let saldoAtual = conta1.consultar();
console.log(`Saldo inicial: ${saldoAtual}`);
conta1.depositar(100);
saldoAtual = conta1.consultar();
console.log(`Saldo atual: ${saldoAtual}`);
conta1.sacar(80);
saldoAtual = conta1.consultar();
console.log(`Saldo atual: ${saldoAtual}`);
