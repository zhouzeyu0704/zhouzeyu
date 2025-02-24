// 页面加载时，显示 2 秒过场动画后进入主内容
window.onload = function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000);
};

// 点击按钮后显示弹窗
function showMessage() {
    // 隐藏按钮
    const button = document.querySelector("button");
    button.style.display = "none";

    // 显示弹窗
    const popup = document.getElementById("popup");
    popup.style.display = "flex";
}

// 关闭弹窗
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
