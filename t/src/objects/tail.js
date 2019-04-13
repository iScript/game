// 跳瓶跳跃时的拖尾

class TailSystem {
    constructor () {
        this.cellTailConfig = {
            duration: 100,
            height: 2.0,
            width: 0.5,
            distance: 0.5
        }
        this.distance = this.cellTailConfig.distance
        this.tailsRemainPool = []
        this.tailsUsingPool = []
    }

    init (scene, bottle) {
        this.scene = scene
        this.bottle = bottle
        this.lastDotPosition = this.bottle.obj.position.clone()
        this.nowPosition = this.bottle.obj.position.clone()
        var width = this.cellTailConfig.width
        var height = this.cellTailConfig.height
        this.geometry = new THREE.PlaneGeometry(width, height)
        this.material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.3
        });

        // 创造50个尾巴单元,平面和圆柱，先选择平面
        for (var i = 0; i < 20; i++) {
            var cellTail = new CellTail(this.geometry, this.material);

            this.scene.add(cellTail.mesh)
            this.tailsRemainPool.push(cellTail)
        }
    }

    update (tickTime) {
        this.updateActiveCell(tickTime)
        if (this.bottle.status == 'shrink') {
            this.nowPosition = this.bottle.obj.position.clone();
            this.lastDotPosition = this.bottle.obj.position.clone();
        }

        if (this.bottle.status == 'jump') {
            var distance = void 0;

            // 更新位置
            this.nowPosition = this.bottle.obj.position.clone();

            distance = this.nowPosition.clone().distanceTo(this.lastDotPosition.clone());
            if (distance < 5) {
                if (distance >= this.distance) {
                    // 距离过大问题
                    var m = distance / this.distance;
                    var n = Math.floor(m);
                    var lastPosition = this.lastDotPosition.clone();
                    var nowPosition = this.nowPosition.clone();
                    var tickScale = tickTime / this.cellTailConfig.duration;
                    for (var i = 1; i <= n; i++) {
                        nowPosition = this.lastDotPosition.clone().lerp(this.nowPosition.clone(), i / m);
                        var scale = 1 + tickScale * (i / m - 1);
                        scale = scale <= 0 ? 0 : scale;
                        this.layEgg(lastPosition.clone(), nowPosition.clone(), scale);
                        lastPosition = nowPosition.clone();
                        if (i == n) {
                        this.lastDotPosition = nowPosition.clone();
                        }
                    }
                }
            } else {
                this.lastDotPosition = this.nowPosition.clone();
            }
        }
    }

    correctPosition () {
        this.lastDotPosition = this.bottle.obj.position.clone();
    }

    updateActiveCell (tickTime) {
        var array = this.tailsUsingPool;
        var deltaScaleY = 1 / this.cellTailConfig.duration;
        var delatAlpha = 1 / this.cellTailConfig.duration;
        for (var i = 0; i < array.length; i++) {
        // 更新时间
        array[i].tickTime += tickTime;

        // 压缩所有cell的高度
        var newScale = array[i].mesh.scale.y - deltaScaleY * tickTime;
        if (newScale > 0) {

            array[i].mesh.scale.y = newScale > 0 ? newScale : 0;

            // array[i].mesh.material.opacity = 0.3

            // 判断透明度和高度，剔除用完的
            if (array[i].tickTime >= this.cellTailConfig.duration) {
            array[i].reset();
            var cell = array.shift();
            this.tailsRemainPool.push(cell);
            i--;
            }
        } else {
            array[i].reset();
            var _cell = array.shift();
            this.tailsRemainPool.push(_cell);
            i--;
        }
        }
    }

    layEgg (lastDotPosition, nowPosition) {
        var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

        var cellTail = this.getMesh();

        this.tailsUsingPool.push(cellTail);

        cellTail.mesh.position.set(nowPosition.x, nowPosition.y, nowPosition.z);

        cellTail.mesh.scale.y = scale;

        cellTail.mesh.lookAt(lastDotPosition);

        cellTail.mesh.rotateY(Math.PI / 2);

        cellTail.mesh.visible = true;
    }

    getMesh () {
        var res = this.tailsRemainPool.shift();
        if (!res) {
        res = new CellTail(this.geometry, this.material);
        this.scene.add(res.mesh);
        }
        return res;
    }
}

// tail 单元
class CellTail {
    constructor (geometry, material) {
        this.tickTime = 0;
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.visible = false;
        this.mesh.name = 'tail';
    }

    reset () {
        this.tickTime = 0;
        this.mesh.scale.set(1, 1, 1);
        this.mesh.visible = false;
    }
}

export default new TailSystem()