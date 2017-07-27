

function startGame(){
    new Board();
}

$(document).ready(function(){
    $("#btn-start").click(function(){
        $('.start-container').hide();
        $('.game-container').show();
        Resource.onLoad = function(){
             startGame();
        }
        Resource.init();
    });
    
    $("#btn-setting").click(function(){
        alert("55555");
    });

});