// void é usado onde não há dados. Por exemplo, se uma função 
// não retornar nenhum valor, você poderá especificar void como 
// tipo de retorno.

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));

}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luiz', 'Otávio');
pessoa.exibirNome();

export { pessoa };
