// 页面加载时，显示 2 秒过场动画后进入主内容
window.onload = function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 2000);
};

// 跳转到新的页面
function redirectToMessagePage() {
    window.location.href = "message.html";  // 跳转到 message.html 页面
}
