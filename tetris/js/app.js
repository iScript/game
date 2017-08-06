

function startGame(){
    new Board();
}

$(document).ready(function(){
    
    var gameInst;
    
    $("#btn-start").click(function(){
        $('.start-container').hide();
        $('.game-container').show();
        Resource.onLoad = function(){
             gameInst = new Tetris()
             gameInst.startGame();
        }
        Resource.init();
    });
    
    $("#btn-setting").click(function(){
        alert("55555");
    });

    $('#btn-game-pause').click(function(evt){
        console.log(00);
        var el = evt.target;
        if (el.innerText === '暂停') {
            el.innerText = '继续';
            gameInst.pause();
        } else {
            el.innerText = '暂停';
            gameInst.resume();
        }
    });

});