// 监听扩展安装或更新事件
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        console.log('ThreeHelper扩展已安装');
    } else if (details.reason === 'update') {
        console.log('ThreeHelper扩展已更新');
    }
});
