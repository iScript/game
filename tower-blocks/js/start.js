class Stage
{
	container;
	camera;
	scene;
	renderer;
	light;
	softLight;
	group;
	
	constructor()
	{
		// container
		
		this.container = document.getElementById('game');
		
		// renderer
		
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: false
		});
		
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setClearColor('#D0CBC7', 1);
		this.container.appendChild( this.renderer.domElement );
		
		// scene
		this.scene = new THREE.Scene();

		// camera 
		let aspect = window.innerWidth / window.innerHeight;
        let d = 20;
        //正交投影相机 (left : Number, right : Number, top : Number, bottom : Number, near : Number, far : Number)
		this.camera = new THREE.OrthographicCamera( - d * aspect, d * aspect, d, - d, -100, 1000);
		this.camera.position.x = 2;
		this.camera.position.y = 2; 
		this.camera.position.z = 2; 
		this.camera.lookAt(new THREE.Vector3(0, 0, 0));
		
		//light
		this.light = new THREE.DirectionalLight(0xffffff, 0.5);
		this.light.position.set(0, 499, 0);
		this.scene.add(this.light);

		this.softLight = new THREE.AmbientLight( 0xffffff, 0.4 );
		this.scene.add(this.softLight)
        
        // 坐标系 The X axis is red. The Y axis is green. The Z axis is blue.
        // var axesHelper = new THREE.AxesHelper( 15 );
        // this.scene.add( axesHelper );
       

		window.addEventListener('resize', () => this.onResize());
		this.onResize();
	}
	
	setCamera(y, speed)
	{
		TweenLite.to(this.camera.position, speed, {y: y + 4, ease: Power1.easeInOut});
		TweenLite.to(this.camera.lookAt, speed, {y: y, ease: Power1.easeInOut});
	}
	
	onResize()
	{
		let viewSize = 30;
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.camera.left = window.innerWidth / - viewSize;
		this.camera.right = window.innerWidth / viewSize;
		this.camera.top = window.innerHeight / viewSize;
		this.camera.bottom = window.innerHeight / - viewSize;
		this.camera.updateProjectionMatrix();
	}
	
	render = function()
	{
		this.renderer.render(this.scene, this.camera);
	}

	add = function(elem)
	{
		this.scene.add(elem);
	}

	remove = function(elem)
	{
		this.scene.remove(elem);
	}
}


class Block
{
	STATES = {ACTIVE: 'active', STOPPED: 'stopped', MISSED: 'missed'};
	MOVE_AMOUNT = 12;

	dimension = { width: 0, height: 0, depth: 0}
	position = {x: 0, y: 0, z: 0};
	
	mesh;
	state;
	index;
	speed;
	direction;
	colorOffset;
	color;
	material;

	workingPlane;
	workingDimension;

    targetBlock;
    
    constructor(block)  // 参数为传入上一个block
	{
		// 目前block即上一个block
		this.targetBlock = block;
		
		this.index = (this.targetBlock ? this.targetBlock.index : 0) + 1;
		this.workingPlane = this.index % 2 ? 'x' : 'z';
		this.workingDimension = this.index % 2 ? 'width' : 'depth';
		
		// 方块的长宽高
		this.dimension.width = this.targetBlock ? this.targetBlock.dimension.width : 10;
		this.dimension.height = this.targetBlock ? this.targetBlock.dimension.height : 2;
		this.dimension.depth = this.targetBlock ? this.targetBlock.dimension.depth : 10;
        
        //
		this.position.x = this.targetBlock ? this.targetBlock.position.x : 0;
		this.position.y = this.dimension.height * this.index;
		this.position.z = this.targetBlock ? this.targetBlock.position.z : 0;
		
		this.colorOffset = this.targetBlock ? this.targetBlock.colorOffset : Math.round(Math.random() * 100);
		
		//设置颜色
		if(!this.targetBlock) 
		{
			this.color = 0x333344;
		}
		else
		{
			let offset = this.index + this.colorOffset;
			var r = Math.sin(0.3 * offset) * 55 + 200;
			var g = Math.sin(0.3 * offset + 2) * 55 + 200;
			var b = Math.sin(0.3 * offset + 4) * 55 + 200;
			this.color = new THREE.Color( r / 255, g / 255, b / 255 );
        }
        
		// state
		this.state = this.index > 1 ? this.STATES.ACTIVE : this.STATES.STOPPED;
		
		// set direction
		this.speed = -0.1 - (this.index * 0.005);
		if(this.speed < -4) this.speed = -4;
		this.direction = this.speed;
		
		// create block
        let geometry = new THREE.BoxGeometry( this.dimension.width, this.dimension.height, this.dimension.depth);
		//geometry.applyMatrix( new THREE.Matrix4().makeTranslation(this.dimension.width/2, this.dimension.height/2, this.dimension.depth/2) );
        
        this.material = new THREE.MeshToonMaterial( {color: this.color, shading: THREE.FlatShading} );
        this.mesh = new THREE.Mesh( geometry, this.material );
        
		this.mesh.position.set(this.position.x, this.position.y + (this.state == this.STATES.ACTIVE ? 0 : 0), this.position.z);
        
        

		if(this.state == this.STATES.ACTIVE) 
		{   
			this.position[this.workingPlane] = Math.random() > 0.5 ? -this.MOVE_AMOUNT : this.MOVE_AMOUNT;
		}
    } 

    //
    reverseDirection()
	{   
        //this.speed始终是负的，this.direction第一次是负的，后面正负迭代
		this.direction = this.direction > 0 ? this.speed : Math.abs(this.speed); 	
    }
    
    //放置
    place()
	{
		this.state = this.STATES.STOPPED;
        
        // 重叠长度 = 被叠块块长度 - （2块偏移之差，即当前移动的块相对于被叠块偏移了多少）   当前块长度=被叠块
        //（如 被叠块长度8，正方向偏移1，当前块负方向偏移2，则重叠 8 - abs(1 - -2)=5
        let overlap = this.targetBlock.dimension[this.workingDimension] - Math.abs(this.position[this.workingPlane] - this.targetBlock.position[this.workingPlane]);
        
        console.log("重叠长度",overlap)
		
        // 返回 轴方向和速度
        let blocksToReturn = {
			plane: this.workingPlane,
			direction: this.direction
		};
		
		if(this.dimension[this.workingDimension] - overlap < 0.3)
		{   
            //alert("小于0.3")
			// overlap = this.dimension[this.workingDimension];
			// blocksToReturn.bonus = true;
			// this.position.x = this.targetBlock.position.x;
			// this.position.z = this.targetBlock.position.z;
			// this.dimension.width = this.targetBlock.dimension.width;
			// this.dimension.depth = this.targetBlock.dimension.depth;
		}
        
        //有重叠
		if(overlap > 0)
		{
			let choppedDimensions = { width: this.dimension.width, height: this.dimension.height, depth: this.dimension.depth };
			choppedDimensions[this.workingDimension] -= overlap;
			this.dimension[this.workingDimension] = overlap;
            
            console.log("this dimension",this.dimension)

            // 放置的方块
			let placedGeometry = new THREE.BoxGeometry( this.dimension.width, this.dimension.height, this.dimension.depth);
			//placedGeometry.applyMatrix( new THREE.Matrix4().makeTranslation(this.dimension.width/2, this.dimension.height/2, this.dimension.depth/2) );
			let placedMesh = new THREE.Mesh( placedGeometry, this.material );
            
            // 超出被切去的方块
			let choppedGeometry = new THREE.BoxGeometry( choppedDimensions.width, choppedDimensions.height, choppedDimensions.depth);
			//choppedGeometry.applyMatrix( new THREE.Matrix4().makeTranslation(choppedDimensions.width/2, choppedDimensions.height/2, choppedDimensions.depth/2) );
			let choppedMesh = new THREE.Mesh( choppedGeometry, this.material );
			
			let choppedPosition = {
				x: this.position.x,
				y: this.position.y,
				z: this.position.z
            }
            
            
            // 放置块的位置 相对于当前位置 + 二分之一偏移
            this.position[this.workingPlane] = this.targetBlock.position[this.workingPlane] + (this.position[this.workingPlane] - this.targetBlock.position[this.workingPlane])/2   
            
            // 计算掉落块的位置 ？？
            // 负方向超出
			if(this.position[this.workingPlane] < this.targetBlock.position[this.workingPlane])
			{   
                // 偏移减长度 
                choppedPosition[this.workingPlane] = -this.targetBlock.dimension[this.workingDimension] + (this.position[this.workingPlane] - this.targetBlock.position[this.workingPlane])/2
			}
			else    // 正方向超出
			{   
                // 长度减偏移
                choppedPosition[this.workingPlane] = this.targetBlock.dimension[this.workingDimension] - (this.position[this.workingPlane] - this.targetBlock.position[this.workingPlane])/2
			}
			
			placedMesh.position.set(this.position.x, this.position.y, this.position.z);
			choppedMesh.position.set(choppedPosition.x, choppedPosition.y, choppedPosition.z);
			
			blocksToReturn.placed = placedMesh;
			if(!blocksToReturn.bonus) blocksToReturn.chopped = choppedMesh;
		}
		else
		{
			this.state = this.STATES.MISSED;
		}
		
        this.dimension[this.workingDimension] = overlap;
        //console.log(this.dimension,"dis")

		return blocksToReturn;
	}
    

    tick()
	{
		if(this.state == this.STATES.ACTIVE)
		{
			let value = this.position[this.workingPlane];
			if(value > this.MOVE_AMOUNT || value < -this.MOVE_AMOUNT) this.reverseDirection();
			this.position[this.workingPlane] += this.direction;	    
			this.mesh.position[this.workingPlane] = this.position[this.workingPlane];	
		}
	}
}

class Game
{
	STATES = {
		'LOADING': 'loading',
		'PLAYING': 'playing',
		'READY': 'ready',
		'ENDED': 'ended',
		'RESETTING': 'resetting'
	}
    
    blocks = [];
	state = this.STATES.LOADING;
	
	// groups
	newBlocks       
	placedBlocks;
	choppedBlocks;

	// UI elements
	scoreContainer;
	mainContainer;
	startButton;
	instructions;
	
	constructor()
	{
		this.stage = new Stage();
		
		this.mainContainer = document.getElementById('container');
		this.scoreContainer = document.getElementById('score');
		this.startButton = document.getElementById('start-button');
		this.instructions = document.getElementById('instructions');
		this.scoreContainer.innerHTML = '0';
		
		this.newBlocks = new THREE.Group();
		this.placedBlocks = new THREE.Group();
		this.choppedBlocks = new THREE.Group();
		
		this.stage.add(this.newBlocks);
		this.stage.add(this.placedBlocks);
		this.stage.add(this.choppedBlocks);
		
		this.addBlock();
		this.tick();
		
		this.updateState(this.STATES.READY);
        
        //空格键
		document.addEventListener('keydown', e =>
		{   
			if(e.keyCode == 32) this.onAction()
		});
        
        
		document.addEventListener('click', e =>
		{
			this.onAction();
		});		
		
		document.addEventListener('touchstart', e =>
		{
			e.preventDefault();
			// this.onAction();
			
			// ☝️ this triggers after click on android so you
			// insta-lose, will figure it out later.
		});
	}

	updateState(newState)
	{
		for(let key in this.STATES) this.mainContainer.classList.remove(this.STATES[key]);
		this.mainContainer.classList.add(newState);
		this.state = newState;
	}

	onAction()
	{
		switch(this.state)
		{
			case this.STATES.READY:
				this.startGame();
				break;
			case this.STATES.PLAYING:
				this.placeBlock();
				break;
			case this.STATES.ENDED:
				this.restartGame();
				break;	
		}
	}
	
	startGame()
	{
		if(this.state != this.STATES.PLAYING)
		{
			this.scoreContainer.innerHTML = '0';
			this.updateState(this.STATES.PLAYING);
			this.addBlock();
		}
	}

	restartGame()
	{
		this.updateState(this.STATES.RESETTING);
		
		let oldBlocks = this.placedBlocks.children;
		let removeSpeed = 0.2;
		let delayAmount = 0.02;
		for(let i = 0; i < oldBlocks.length; i++)
		{
            //上面的块缩小并移除
			TweenLite.to(oldBlocks[i].scale, removeSpeed, {x: 0, y: 0, z: 0, delay: (oldBlocks.length - i) * delayAmount, ease: Power1.easeIn, onComplete: () => this.placedBlocks.remove(oldBlocks[i])})
			TweenLite.to(oldBlocks[i].rotation, removeSpeed, {y: 0.5, delay: (oldBlocks.length - i) * delayAmount, ease: Power1.easeIn})
        }
        
       

		let cameraMoveSpeed = removeSpeed * 2 + (oldBlocks.length * delayAmount);
        
        this.stage.setCamera(2, cameraMoveSpeed);
		
		
		this.blocks = this.blocks.slice(0, 1);  //只留一个最底下的block
		
		setTimeout(() => {
			this.startGame();
		}, cameraMoveSpeed * 1000)
		
	}
    
    // 放置块
	placeBlock()
	{
		let currentBlock = this.blocks[this.blocks.length - 1];
		let newBlocks = currentBlock.place();
        
        // 移除完整的，放上被切割的块
        this.newBlocks.remove(currentBlock.mesh);
        if(newBlocks.placed) this.placedBlocks.add(newBlocks.placed);
        
        // 掉落块动画
        if(newBlocks.chopped)
		{
			this.choppedBlocks.add(newBlocks.chopped);
			let positionParams = {y: '+=30', ease: Power1.easeIn, onComplete: () => this.choppedBlocks.remove(newBlocks.chopped)}
			let rotateRandomness = 10;
			let rotationParams = {
				delay: 0.05,
				x: newBlocks.plane == 'z' ? ((Math.random() * rotateRandomness) - (rotateRandomness/2)) : 0.1,
				z: newBlocks.plane == 'x' ? ((Math.random() * rotateRandomness) - (rotateRandomness/2)) : 0.1,
				y: Math.random() * 0.1,
            };
            
			if(newBlocks.chopped.position[newBlocks.plane] > newBlocks.placed.position[newBlocks.plane])
			{   
                
				positionParams[newBlocks.plane] = '+=' + (40 * Math.abs(newBlocks.direction));
			}
			else
			{   
				positionParams[newBlocks.plane] = '-=' + (40 * Math.abs(newBlocks.direction));
            }
            
            //TweenLite.to( target:Object, duration:Number, vars:Object )   
			TweenLite.to(newBlocks.chopped.position, 1, positionParams);
			TweenLite.to(newBlocks.chopped.rotation, 1, rotationParams);
			
		}
        
        // 放置完后 判断是否结束，没的话放上新的块
		this.addBlock();
	}
	
	addBlock()
	{
        let lastBlock = this.blocks[this.blocks.length - 1];
        
		// 判断游戏是否结束
		if(lastBlock && lastBlock.state == lastBlock.STATES.MISSED)
		{   
            alert("游戏结束~~")
            return this.endGame();
            
		}
		
		this.scoreContainer.innerHTML = String(this.blocks.length - 1);
		
        let newKidOnTheBlock = new Block(lastBlock);
        
        this.newBlocks.add(newKidOnTheBlock.mesh);

		this.blocks.push(newKidOnTheBlock);

		this.stage.setCamera(this.blocks.length * 2);
		
		if(this.blocks.length >= 5) this.instructions.classList.add('hide');
	}
	
	endGame()
	{
		this.updateState(this.STATES.ENDED);
	}

	tick()
	{
		this.blocks[this.blocks.length - 1].tick(); //
		this.stage.render();
		requestAnimationFrame(() => {this.tick()});
	}
}

let game = new Game()