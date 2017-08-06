(function (window) {
    'use strict';

    var shapeLayouts = [
        // 二位数组 ， 第一维行 第二维列
        [[0, 1, 0], [1, 1, 1]], //
        [[1, 1, 1, 1]],
        [[1, 1], [1, 1]],
        [[0, 1], [1, 1], [1, 0]],
        [[1, 0], [1, 1], [0, 1]],
        [[1, 0, 1], [1, 1, 1]],
        [[0, 1], [1, 1]],
        [[1, 1]],
        [[1, 1], [1, 0], [1, 0]],
        [[1, 1], [0, 1], [0, 1]]
    ];

    var random = function (minValue, maxValue) {
        return minValue + Math.floor(Math.random() * maxValue);//参数随机数，从0到1的值（包含0，不包含1）
    };

    var styleCount = 7;

    function Shape() {
        this.x = 0;
        this.y = 0;
        this.blockColorType = random(1, 7);
        this.block = new Block(this.blockColorType);

        //随机取一个二维数组
        this.layout = shapeLayouts[random(0, shapeLayouts.length)];
    }

    Shape.prototype = {
        constructor: Shape,
        
        draw: function (context) {
            for (var i = 0; i < this.layout.length; i++) {
                for (var j = 0; j < this.layout[i].length; j++) {
                    if (this.layout[i][j]) {
                        // 根据二维数据 ， j为x轴 ，i为y轴
                        this.block.draw(context, j + this.x, i + this.y);
                    }
                }
            }
        },
        random(minValue, maxValue) {
            return minValue + Math.floor(Math.random() * maxValue);//参数随机数，从0到1的值（包含0，不包含1）
        },
        rotate: function () {
            var newLayout = [];
            // 
            for (var y = 0; y < this.layout[0].length; y++) {   // 所有列
                newLayout[y] = [];  //先将列转成行
                for (var x = 0; x < this.layout.length; x++) {  // 所有行
                    // 方块翻转算法 ： 按顺时针旋转
                    // 原矩阵第一列翻转后变成第一行，并且第一列的最后一个值变成第一行的第一个值。原矩阵第二列翻转后变成第二行 。。。
                    // 循环每一列的每一行。原本是y列x行的 ，转为x列y行
                    // 新元素的y行x列的值 为 原来元素的倒数第i行的y列
                    newLayout[y][x] = this.layout[this.layout.length - 1 - x][y]; 
                }
            }
            this.layout = newLayout;

            this._setLayout();  //修正翻转越界
        },
        _setLayout: function () {
            if (this.x < 0) {
                this.x = 0;
            }
            if (this.y < 0) {
                this.y = 0;
            }
            if (this.x + this.layout[0].length > TetrisConfig.cols) {
                this.x = TetrisConfig.cols - this.layout[0].length;
            }
            if (this.y + this.layout.length > TetrisConfig.rows) {
                this.y = TetrisConfig.rows - this.layout.length;
            }
        },
        _getMaxCols: function () {
            var max = 0;
            for (var y = 0; y < this.layout.length; y++) {
                max = Math.max(max, this.layout[y].length);
            }
            return max;
        },
        _getMaxRows: function(){
            return this.layout.length;
        },
        setPosition: function (cols, rows, ignoreRows) {
            this.x = Math.floor((cols - this._getMaxCols()) / 2);
            if (!ignoreRows) {
                this.y = Math.floor((rows - this._getMaxRows()) / 2);
            }
        }
    };

    window.Shape = Shape;
})(window);