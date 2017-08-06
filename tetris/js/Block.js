(function (window) {
    'use strict';
    function Block(blockColorType) {
        this.blockColorType = blockColorType;
        this.size = 30;         //块大小
        this.originalSize = 32; //图片大小
        this.sprite = window.Resource.get('blocks');
    }

    Block.prototype = {
        constructor: Block,
        draw: function (context, x, y, blockColorType,size) {
            size = size || this.size;
            context.drawImage(this.sprite, ( (blockColorType || this.blockColorType) - 1) * this.originalSize, 0, this.originalSize, this.originalSize, x * this.size, y * this.size, this.size, this.size);
        }
    };

    window.Block = Block;

})(window);