function start() {
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const paint = canvas.getContext('2d');

let x = Math.random() * innerWidth,
    y = Math.random() * innerHeight;
let dx, dy;
let radius = 5;
let updateX = 8,
    updateY = 0;
let snake_width = 70,
    snake_height = 10;
let foodWidth = 200,
    foodHeight = 200;


let snakeLocation = {
    width : undefined,
    height : undefined
};

// UpdateSnake
function updateSnake_onVertical(x, y) {
    snake_height = x;
    snake_width = y;
}

function updateSnake_onHorizontal(x,y){
    snake_height = x;
    snake_width = y;
}

function updateFood(){
    foodWidth = Math.random()*innerWidth;
    foodHeight = Math.random()*innerHeight;
    snake_height+=5;
}
window.addEventListener('keydown', function (key) {
    if (key.keyCode == '37') {
        // window.alert('left');
        updateSnake_onHorizontal(snake_width,snake_height);
        updateX = -2;
        updateY = 0;
    }
}, false);
window.addEventListener('keydown', function (key) {
    if (key.keyCode == '38') {
        // window.alert('up');
        updateSnake_onVertical(snake_width,snake_height);
        updateX = 0;
        updateY = -2;
    }
}, false);
window.addEventListener('keydown', function (key) {
    if (key.keyCode == '39') {
        // window.alert('right');
        updateSnake_onHorizontal(snake_width,snake_height);
        updateX = 2;
        updateY = 0;
    }
}, false);
window.addEventListener('keydown', function (key) {
    if (key.keyCode == '40') {
        // window.alert('down');
        updateSnake_onVertical(snake_width,snake_height);
        updateX = 0;
        updateY = 2;
    }
});

function food() {
    paint.arc(foodWidth, foodHeight, radius, 0, Math.PI * 2, false);
    paint.strokeStyle = "red";
    paint.stroke();
    paint.fillStyle = "red";
    paint.fill();
}

function successUpdate(food_width,food_height,snake_width,snake_height){
    if((food_width===snake_width) && (foodHeight===snake_height)){
        alert('success');
        updateFood();
    }
}

function animate() {
    requestAnimationFrame(animate);
    paint.clearRect(0, 0, innerWidth, innerHeight);
    food();
    paint.fillStyle = "green";
    paint.fillRect(x, y, snake_width, snake_height);

    // Event Listener
    if (x + radius > innerWidth || x - radius < 0) {
        updateX = -updateX;
        // window.alert('out !!!');
    }
    if (y + radius > innerHeight || y - radius < 0) {
        updateY = -updateY;
        // window.alert('out !!!');
    }
    x += updateX;
    y += updateY;
    snakeLocation.width = x;
    snakeLocation.height = y;
    console.log(snakeLocation);
    console.log(foodWidth+' '+foodHeight)
    successUpdate(foodWidth,foodHeight,snakeLocation.width,snakeLocation.height);
    // y;

}
animate();

console.log(canvas);
}