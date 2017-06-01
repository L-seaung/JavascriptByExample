var s;
s = document.getElementById('searchbox');
setTimeout(function(){
    document.getElementsByTagName('body')[0].removeChild(s);
}, 5);
