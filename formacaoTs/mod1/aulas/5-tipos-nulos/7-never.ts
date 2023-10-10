{
  let a: string = "Marcos";
  const b = 23;

  // errors
  let c: never = a;
  c = b;
  c = null;
  c = undefined;
  c = {};
  c = [];
  c = c;
  c = void 0; // igual a undefined
  c = 100n;
  // errors
  const x = c;
  const o: string = c;
}

// never e um subtipo de todo mundo, o contrario de unknow
