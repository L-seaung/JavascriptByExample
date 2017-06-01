setClocks = function(){
    for (var i = clocks.length - 1; i >= 0; i--){
        clocks[i].start();
        speed = 30000;
        if (clocks[i].colseconds) speed = 500;
    }
    updateClocks();
    setInterval(updateClocks, speed);
}
