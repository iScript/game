(function (window) {
    
    var cacheMap = new Map();   // 用于存储资源的Map对象 
    var resourceTotalCount = 1; // 资源总数量
    var currentLoaded = 0;      // 当前加载的资源数量

    var isAdd = function () {
        currentLoaded += 1;
        if (currentLoaded === resourceTotalCount && typeof window.Resource.onLoad === 'function') {
            window.Resource.onLoad();
        }
    };

    var init = function () {
        var image = new Image();
        image.src = 'images/blocks.png';
        image.onload = function () {
            cacheMap.set('blocks', image);
            isAdd();
        };
    };

    var get = function (key) {
        return cacheMap.get(key);
    };

    window.Resource = {
        get: get,
        init: init,
        onLoad: null // 资源加载完成回调
    };
})(window);