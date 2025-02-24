// 页面加载时，显示 2 秒过场动画后进入主内容
window.onload = function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000);
};

function showMessage() {
    // 随机颜色列表（时尚颜色）
    const colors = ["#ff4081", "#4fc3f7", "#ffb74d", "#66bb6a", "#e57373"];

    // 选择一个随机颜色
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    // 改变网页背景颜色
    document.body.style.background = `linear-gradient(135deg, ${randomColor}, #2a5298)`;

    // 在网页上显示 "张浩博最帅"
    let messageContainer = document.getElementById("message-container");
    messageContainer.textContent = "张浩博最帅！";
}
