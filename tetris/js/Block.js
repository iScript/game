(function (window) {
    'use strict';
    function Block(blockType) {
        this.blockType = blockType;
        this.size = 30;
        this.originalSize = 32; 
        this.sprite = window.Resource.get('blocks');
    }

    Block.prototype = {
        constructor: Block,
        draw: function (context, x, y, blockType) {
            context.drawImage(this.sprite, ((blockType || this.blockType) - 1) * this.originalSize, 0, this.originalSize, this.originalSize, x * this.size, y * this.size, this.size, this.size);
        }
    };

    window.Block = Block;

})(window);