type FilterCallBack<U> = (value: U, index?: number, array?: U[]) => boolean;

function myFilter<T>(array: T[], callbackfn: FilterCallBack<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[1])
    }
  }
  return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = myFilter(array, (value) => value < 5);
console.log(arrayFiltrado);