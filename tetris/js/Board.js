function Board() {
    this.blockSize = 30;
    this.rows = 20;
    this.cols = 13;
    this.canvas = new Canvas('c_game_main', this.cols * this.blockSize, this.rows * this.blockSize);
    this.context = this.canvas.context;
    this.boardList = [];

    this._init();

    var b = Resource.get('blocks');
    console.log(b);
}

Board.prototype = {
    constructor: Board,
    _init: function () {
        this._buildGridData();
        this._initGrid();
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
    }
};