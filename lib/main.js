if (window.__THREE_SCENES__ && window.__THREE_SCENES__.length > 0) {
    window.ThreeHelper && window.ThreeHelper();
    console.log('[ThreeHelper] 检测到场景，函数已执行');
} else {
    console.warn('[ThreeHelper] 未检测到Three.js场景');
}

