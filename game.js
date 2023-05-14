const hole = document.getElementById("hole");
var result = document.getElementById("result");
var text = document.getElementById("text");
var game = document.getElementById("game");
var startButton = document.getElementById('btn')
var blockTop = document.getElementById('blockTop')
var blockBottom = document.getElementById('blockBottom')
var jumping = 0;
var score = 0;

//animation 

hole.addEventListener("animationiteration", hol)
startButton.addEventListener("click", start)

function hol() {
  var random = ((Math.random() * 27) + 3)
  hole.style.top = random + "vh"
  score++;
}

function start() {
  game.style.display = 'block'
  result.style.display = 'none'
}

//fall and game over


var fall = setInterval(() => {

  var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

  var gameHeight = parseInt(window.getComputedStyle(game).getPropertyValue("height"))/window.innerHeight * 100

  birdTop = birdTop / ((gameHeight * window.innerHeight) / 100) * 100

  var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))

  blockTop.style.height = holeTop / window.innerHeight * 100 + 'vh'
  
  var blockTopHeight = parseInt(window.getComputedStyle(blockTop).getPropertyValue("height"))/ window.innerHeight * 100

  blockBottom.style.height = parseInt(window.getComputedStyle(hole).getPropertyValue("bottom")) / window.innerHeight * 100 + 'vh'

  var blockBottomHeight = parseInt(window.getComputedStyle(blockBottom).getPropertyValue("height")) / window.innerHeight * 100

  if (jumping == 0) { bird.style.top = (birdTop + 6) + "%"; }

  var blockTopLeft = parseInt(window.getComputedStyle(blockTop).getPropertyValue("left")) / (parseInt(window.getComputedStyle(game).getPropertyValue("width"))) * 100
  
  var blockTopLeftPx = parseInt(window.getComputedStyle(blockTop).getPropertyValue("left"))
  
  var large = parseInt(34 / (0.6 * window.innerWidth) * 100)

  var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))

  if ((birdTop > 97) || ((blockTopLeft < large) && (blockTopLeftPx > -20) && ((birdTop < blockTopHeight) || ((birdTop/2) > (50 - blockBottomHeight))))) {
    result.style.display = "block";
    text.innerText = `Score : ${score}`;
    game.style.display = "none";
    score = 0;

  }

}, 150);

//jump
function jump() {
  jumping = 1;

  var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  birdTop = birdTop / ((50 * window.innerHeight) / 100) * 100
  if (birdTop > 3) { bird.style.top = (birdTop - 20) + "%" }

  setTimeout(function () {
    jumping = 0
  }, 100)
}

window.addEventListener("keydown", jump)
window.addEventListener('touchstart', jump)