// 过场动画后显示内容
window.onload = function() {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000);
};

// 按钮点击后跳转到新页面
function redirectToMessagePage() {
    window.location.href = "message.html";
}

// 背景动态粒子效果
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.02;
    }
    draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.size <= 0.2) {
            particles.splice(index, 1);
            particles.push(new Particle());
        }
    });
    requestAnimationFrame(animate);
}

init();
animate();
