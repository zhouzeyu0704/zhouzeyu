// 页面加载时动画效果
window.onload = function() {
    // 页面过渡动画，显示欢迎信息
    let transitionScreen = document.getElementById("transition-screen");
    transitionScreen.style.opacity = "1";
    
    setTimeout(() => {
        // 隐藏过渡动画
        transitionScreen.style.opacity = "0";
        // 启动动态背景效果
        startBackgroundAnimation();
    }, 1000);
};

// 动态背景效果
function startBackgroundAnimation() {
    let canvas = document.getElementById("background");
    let ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#ff69b4');
    gradient.addColorStop(0.5, '#8a2be2');
    gradient.addColorStop(1, '#ba55d3');
    
    let circles = [];
    for (let i = 0; i < 100; i++) {
        circles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 20 + 10,
            color: gradient,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1
        });
    }
    
    function drawCircles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        circles.forEach(circle => {
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
            ctx.fillStyle = circle.color;
            ctx.fill();
            
            circle.x += circle.speedX;
            circle.y += circle.speedY;
            
            if (circle.x > canvas.width || circle.x < 0) circle.speedX = -circle.speedX;
            if (circle.y > canvas.height || circle.y < 0) circle.speedY = -circle.speedY;
        });
        
        requestAnimationFrame(drawCircles);
    }
    
    drawCircles();
}
