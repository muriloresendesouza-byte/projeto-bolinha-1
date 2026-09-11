//projeto bolinha -01
let xBolinha = 200;
let yBolinha = 200;
let raio = 15;
let xVelocidade = 30;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
}
//---------funçao mostrar bolinha
function mostraBolinha(){
  circle (xBolinha,yBolinha,raio);
}
//-------- movimenta bolinha
function movimentaBolinha(){
  xBolinha += xVelocidade;
}
//-------verifica colisao
function verificaColisao(){
  if (xBolinha > width || xBolinha < 0){ 
    xVelocidade *= -1}
}