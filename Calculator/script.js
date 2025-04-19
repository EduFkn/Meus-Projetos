function adicionarCaracter(caracter){
  const valorinput= document.querySelector('.display').value
  
  document.querySelector('.display').value = valorinput + caracter

}
function limparTela(){

  document.querySelector('.display').value=''
}
function calcular(){
  const valorinput= document.querySelector('.display').value
   document.querySelector('.display').value=eval(valorinput)
}
function invert(){
  const valorinput= document.querySelector('.display').value
  document.querySelector('.display').value=valorinput*-1
}