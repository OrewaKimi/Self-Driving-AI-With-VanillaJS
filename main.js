const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 200;
canvas.height = 1000;

const road = new Road(canvas.width / 2, 100);
const car = new Car(road.getLaneCenter(1), 200, 30, 50);

animate();

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    road.draw(ctx);
    car.update();
    car.draw(ctx);
}