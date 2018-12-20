// console.log('test');


// go get the canvas element
const canvas = document.getElementById('canvas');
// console.dir(canvas);

// canvas by itself is jsut a "something" to draw on
// in JS we need a "context" which is like our brush
let context = canvas.getContext('2d');

// .rect() takes 4 args:
// 1. upper x
// 2. upper y
// 3. lower x
// 4. lower y

context.rect(100,100,300,300);
context.stroke();
// MOVE TO IS THE INSTANCE OF PUTTING YOUR BRUSH ON THE PAPER
context.moveTo(100,100);
context.lineTo(400,400);
// my learning attempt:
context.lineTo(200,100);
context.lineTo(400,300);
context.lineTo(300,100);
context.lineTo(400,200);
context.lineTo(350,100);

// context.lineTo(225,400);
// context.lineTo(400,100);
// context.lineTo(100,100);
context.stroke();

// context.beginPath();
// 1. x coord for ClientRect
// 2. y coord for center
// 3. radius in pixels
// 4. place to start (0 = 3:00 0'clock)
// 5. place to end (every 90 deg is half PI)
// 6. option, true.false for counterclockwise
// context.arc(100, 75, 50, Math.PI * .5, 2 * Math.PI);

// context.stroke();

// context.fillStyle='#0044ff';
// context.fill();
// context.strokeStyle="ff0";
// context.lineWidth=10;
// context.stroke();


// --------------------------------------------------------

// A CONSTRUCTOR (CODE FOR JS FOR A CLASS)
// function Ball(x,y,r){
//     //inside a constructor, we get the keyword "THIS"
//     this.x=x;
//     this.y=y;
//     // sr=starting radians
//     this.sr=0;
//     // ER = ENDING RADANS
//     this.er=Math.PI * 2;
//     // R = Radius
//     this.r=r;
//     this.xDirection = 1;
//     this.yDirection = 1;

// }
// Ball.prototype.drawBall=function(){
//     context.beginPath();
//     context.arc(this.x, this.y, this.r, this.sr, this.er);
//     context.fillStyle= "#0000ff"
//     context.fill();

// }
// // below, every ball will have a draw property and an update position property.
// Ball.prototype.updateBallPosition = function(){
//     // clearRect takes 4 args, topx, topy, botx, boty... wipe!
//     context.clearRect(0,0,500,500);
//     if(this.x >= 500){
//         this.xDirection = -this.xDirection;
//     }else if(this.x <= 0){
//         this.xDirection = -this.xDirection;
//     }
//     if(this.y >= 500){
//         this.yDirection = -this.xDirection;
//     }else if(this.y <= 0){
//         this.yDirection = -this.xDirection;
//     }
 
//     this.drawBall();
//     this.x += 5 * this.xDirection;
//     this.y += 5 * this.yDirection;
//  }

// aBall = new Ball(100,100, 50);
// // aBall.drawBall();
// anotherBall = new Ball(400,400, 50);
// // anotherBall.drawBall();
// thirdBall=new Ball(90, 200, 40);
// // thirdBall.drawBall();

// let bouncyBalls = [aBall, anotherBall, thirdBall];
// bouncyBalls.forEach((currBall)=>{
//     setInterval(()=>{
//         currBall.updateBallPosition();
//     }, 33)
// })
