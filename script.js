// 逐字显示旋转动画
window.onload = function() {
    let welcomeText = "欢迎来到周泽宇做的网页";
    let welcomeContainer = document.getElementById("welcome-text");
    
    // 拆分文字
    welcomeContainer.innerHTML = "";
    for (let i = 0; i < welcomeText.length; i++) {
        let span = document.createElement("span");
        span.textContent = welcomeText[i];
        span.style.animationDelay = `${i * 0.2}s`;
        welcomeContainer.appendChild(span);
    }

    // 2秒后显示主内容
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000);
};

// 按钮点击后爆炸消失
function explodeButton() {
    let button = document.getElementById("action-btn");
    let rect = button.getBoundingClientRect();
    
    createParticles(rect.x + rect.width / 2, rect.y + rect.height / 2);
    
    button.style.transition = "transform 0.5s, opacity 0.5s";
    button.style.transform = "scale(2)";
    button.style.opacity = "0";
    
    setTimeout(() => {
        button.style.display = "none";
        startPageTransition();
    }, 500);
}

// 生成动态粒子背景
function createParticles(x, y) {
    let canvas = document.getElementById("particles-canvas");
    let ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: x,
            y: y,
            radius: Math.random() * 5 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 60%)`,
            speedX: (Math.random() - 0.5) * 10,
            speedY: (Math.random() - 0.5) * 10,
            life: 100
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            
            p.x += p.speedX;
            p.y += p.speedY;
            p.radius *= 0.98;
            p.life--;

            if (p.life <= 0) {
                particles.splice(i, 1);
            }
        });

        if (particles.length > 0) {
            requestAnimationFrame(drawParticles);
        }
    }
    
    drawParticles();
}

// 页面跳转动画
function startPageTransition() {
    let transitionScreen = document.getElementById("transition-screen");
    transitionScreen.style.opacity = "1";
    transitionScreen.style.visibility = "visible";

    setTimeout(() => {
        window.location.href = "message.html";
    }, 1000);
}
