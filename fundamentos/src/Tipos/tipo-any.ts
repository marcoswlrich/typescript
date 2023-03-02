//  O compilador trata efetivamente any como 
// “desative a verificação de tipo para esta coisa”. 
// Evitar usar
function showMessage(msg: any) {
  return msg;
}
console.log(showMessage([1, 2, 3]));