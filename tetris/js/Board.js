
function Board(gameInst) {
    this.gameInst = gameInst;
    this.blockSize = 30;
    this.rows = 20;
    this.cols = 13;
    this.canvas = new Canvas('c_game_main', this.cols * this.blockSize, this.rows * this.blockSize);
    this.context = this.canvas.context;
    this.boardList = [];

    this.shape = new Shape();

    this._init();

    //var b = Resource.get('blocks');
    //console.log(b);
}

Board.prototype = {
    constructor: Board,
    _init: function () {
        this._buildGridData();
        this._initGrid();

        this.shape.draw(this.context);
        var self = this;
        setTimeout(function () {
            self._buildNextShape();
        });
    },

    //
    _buildGridData() {
        var i, j;
        for (i = 0; i < this.rows; i++) {
            this.boardList[i] = [];
            for (j = 0; j < this.cols; j++) {
                this.boardList[i][j] = 0;
            }
        }
    },
    _buildNextShape: function () {
        this.nextShape = new window.Shape();
        this.nextShape.setPosition(this.gameInst.nextshape.cols, this.gameInst.nextshape.rows);
        this.gameInst.nextshape.render(this.nextShape);
    },
    _initGrid() {
        var i;
        this.context.strokeStyle = 'green';
        this.context.lineWidth = 0.5;
        //绘制线条的笔迹
        for (i = 0; i <= this.rows; i++) {  //横线
            this.context.moveTo(0, i * this.blockSize);
            this.context.lineTo(this.canvas.width, i * this.blockSize);
        }
        for (i = 0; i <= this.cols; i++) {  //竖线
            this.context.moveTo(i * this.blockSize, 0); 
            this.context.lineTo(i * this.blockSize, this.canvas.height);
        }
        //绘制线条
        this.context.stroke();

        //缓存数据
        this.gridImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    },
    
    tick: function () {
        
        //如果还能向下移动
        if (this.validMove(0, 1)) {
            this.shape.y += 1;
        
        } else {    // 如果不能
            this.addShapeToBoardList(); 

            if (this.gameInst._state === 'over') {
                this.gameInst.endGame();
                return;
            }

            this.clearFullRows();
            this.shape = this.nextShape;
            this.shape.setPosition(this.cols, this.rows, true);
            this._buildNextShape();
        }
        this.refresh();
        this.shape.draw(this.context);
    },
    //刷新
    refresh: function () {
        this.canvas.clear();
        this.context.putImageData(this.gridImageData, 0, 0);
        this.drawBlocks();
    },
    // 边界检查
    validMove: function (moveX, moveY) {
        //下一步位置,next仅代表该shape源点（左上角）的next位置
        var nextX = this.shape.x + moveX;   
        var nextY = this.shape.y + moveY;
        
        // 循环该shape
        for (var y = 0; y < this.shape.layout.length; y++) {
            for (var x = 0; x < this.shape.layout[y].length; x++) {
                if (this.shape.layout[y][x]) {
                    if (typeof this.boardList[nextY + y] === 'undefined'            //找不到行
                    || typeof this.boardList[nextY + y][nextX + x] === 'undefined'  //找不到列
                    || this.boardList[nextY + y][nextX + x] //当前位置已有方块
                    || nextX + x < 0 //超出左边界
                    || nextX + x >= this.cols // 超出右边界
                    || nextY + y >= this.rows // 超出下边界
                    ) {
                        return false;
                    }
                }
            }
        }
        return true;
    },
    //
    addShapeToBoardList: function () {
        for (var y = 0; y < this.shape.layout.length; y++) {
            for (var x = 0; x < this.shape.layout[y].length; x++) {
                if (this.shape.layout[y][x]) {
                    var boardX = this.shape.x + x;
                    var boardY = this.shape.y + y;
                    
                    // 如果当前位置没有，游戏结束
                    if (this.boardList[boardY][boardX]) {
                        this.gameInst._state = 'over';
                        return;
                    }
                    // 如果当前位置是空的 ， 放上
                    else {
                        this.boardList[boardY][boardX] = this.shape.blockColorType;
                    }
                }
            }
        }
    },
    //绘制方块
    drawBlocks: function () {
        for (var y = 0; y < this.rows; y++) {
            for (var x = 0; x < this.cols; x++) {
                if (this.boardList[y][x]) {
                    this.shape.block.draw(this.context, x, y, this.boardList[y][x]);
                }
            }
        }
    },
    createEmptyRow() {
        var emptyArr = [];
        for (var i = 0; i < this.cols; i++) {
            emptyArr.push(0);
        }
        return emptyArr;
    },
    clearFullRows: function () {
        // 从下往上判断
        var lines = 0;
        for (var y = this.rows - 1; y >= 0; y--) {
            var filled = this.boardList[y].filter(function (item) { return item > 0; }).length === this.cols;
            if (filled && y) {  
                this.boardList.splice(y, 1);    //将y行删除
                this.boardList.unshift(this.createEmptyRow());
                y++;    // 删除一个元素后，后面的元素下标都往前进了一位，会导致有一行没循环到，需要++
                lines++;// 消除多少行
            }
        }

        var score = lines * 100 * lines; // 清除的行数 * 单行得分 * 倍数。
        var totalScore = this.gameInst.score.addScore(score);
        this.gameInst.highscore.checkScore(totalScore);
         var currentLevel = this.gameInst.level.checkLevel(totalScore);
        if (currentLevel) {
            window.TetrisConfig.speed = Math.floor(window.TetrisConfig.constSpeed * (1 - (currentLevel - 1) / 10));
            this.gameInst.pause();
            setTimeout(function () {
                window.alert('恭喜您升级了！');
                self.gameInst.resume();
            })
        }
    }

};