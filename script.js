// 等待 2 秒后隐藏过场动画，显示正式内容
window.onload = function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000);
};

function showMessage() {
    // 随机颜色列表
    const colors = ["#f0db4f", "#4fc3f7", "#ffb74d", "#a5d6a7", "#e57373"];
    
    // 选择一个随机颜色
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // 改变网页背景颜色
    document.body.style.backgroundColor = randomColor;
    
    // 在网页上显示 "张浩博最帅"
    let messageContainer = document.getElementById("message-container");
    messageContainer.textContent = "张浩博最帅！";
}
