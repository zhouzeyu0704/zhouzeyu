// 页面加载时，显示 2 秒过场动画后进入主内容
window.onload = function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000);
};

function showMessage() {
    // 隐藏按钮
    const button = document.querySelector("button");
    button.style.display = "none";

    // 创建全屏显示文本的元素
    const message = document.createElement("div");
    message.id = "full-screen-message";
    message.textContent = "张浩博最帅！";
    
    // 将文本添加到页面中
    document.body.appendChild(message);

    // 动态背景（如果需要可以加入）
    // document.body.style.background = `linear-gradient(45deg, #ff416c, #ff4b2b)`; // 可以调整背景色
}
