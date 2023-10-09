{
  let nome = "Marcos";
  let idade = 32;
  let programmer = true;

  function oi(nome: string): void {
    console.log(`Ola ${nome}`);
  }

  const num = [1, 2, 3, 4, 5, 6];
  const soma = num.reduce((acc, num) => acc + num);
  console.log(soma);
}
