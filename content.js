// 在页面开始加载时注入ThreeHelper
function injectThreeHelper() {

    // 注入ThreeHelper.umd.cjs脚本
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('lib/ThreeHelper.umd.cjs');
    script.type = 'text/javascript';
    (document.head || document.documentElement).appendChild(script);

    // 注入样式
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.runtime.getURL('lib/style.css');
    (document.head || document.documentElement).appendChild(style);

    console.log('[ThreeHelper] 脚本已注入');
}

// 执行ThreeHelper函数
function executeThreeHelperFunction() {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('lib/ThreeHelper.js');
    (document.head || document.documentElement).appendChild(script);

    // 执行后移除脚本标签
    script.remove();

    console.log('[ThreeHelper] 函数已执行');
    return '🍊 ThreeHelper函数已执行';
}

// 在页面加载时自动注入
injectThreeHelper();

// 监听来自popup的消息
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "executeThreeHelper") {
            injectThreeHelper();
            sendResponse({ status: "ThreeHelper已注入" });
        } else if (request.action === "executeThreeHelperFunction") {
            const message = executeThreeHelperFunction();
            sendResponse({ status: message });
        }
    }
);