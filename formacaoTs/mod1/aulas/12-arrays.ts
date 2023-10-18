{
  const strings: string[] = ["marcos", "ana"];
  const numbers: Array<number> = [1, 2, 3, 4];
  const booleans: boolean[] = [true, false];

  const anys: any[] = [1, false, "string", undefined];
  const unknowns: unknown[] = [2, "a", false];
  const objects: object[] = [{ a: 2 }, { b: 3 }];
  const pessoas: { name: string }[] = [{ name: "Marcos" }, { name: "Pedro" }];

  const arrays: string[][] = [["a", "b"], ["c"]];
  const generics: Array<Array<string>> = [["a", "b"], ["c"]];

  const nome = ["joao", "maria"];
}

{
  const numbers: number[] = [1, 2, 3];
  numbers.push(1);
  numbers.pop();
  numbers[0];
}

{
  const array: (string | number | null)[] = [1, "b", null];
  array.push(2);
  array.push("c");

  const array2: Array<string | number | null> = [1, "b", null];
}

{
  // Array somente para leitura
  const readOnly: readonly string[] = ["a", "c"];
  // os metodos nao funcionam nesse tipo de array
  readOnly[0];
}

{
  type StringOrNumber = (string | number)[];
  const arr: StringOrNumber = [30, "idade"];
  const arr2: StringOrNumber[] = [[30], ["idade"]];
  const arr3: (string | number)[][] = [[30], ["idade"]];
}
