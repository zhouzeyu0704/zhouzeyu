// 逐字显示旋转动画
window.onload = function() {
    let welcomeText = "欢迎来到周泽宇做的网页";
    let welcomeContainer = document.getElementById("welcome-text");
    
    // 把文字拆成单个字母
    welcomeContainer.innerHTML = "";
    for (let i = 0; i < welcomeText.length; i++) {
        let span = document.createElement("span");
        span.textContent = welcomeText[i];
        span.style.animationDelay = `${i * 0.2}s`; // 依次延迟出现
        welcomeContainer.appendChild(span);
    }

    // 2秒后显示主内容
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 3000);
};

// 点击按钮后跳转
function startPageTransition() {
    let transitionScreen = document.getElementById("transition-screen");
    transitionScreen.classList.add("active");
    setTimeout(() => {
        window.location.href = "message.html"; // 跳转到新页面
    }, 1000);
}
