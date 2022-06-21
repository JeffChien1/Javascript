function tabuada (){
    var tnum = document.getElementById('txtn1');
    var res = document.querySelector('div#res');
    var num = Number(tnum.value);
    var tabuada = '';

    for(var c = 1; c <= 10 ; c++) {
        tabuada += num+ "x" + c + "=" + c*num+ "<br />"; 
    }
    res.innerHTML = tabuada;
}