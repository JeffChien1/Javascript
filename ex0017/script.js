function tabuada (){
    var num = document.getElementById('txtn1');
    var tab = document.getElementById('seltab');
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var num = Number(num.value);
        var c = 1
        tab.innerHTML = ''
        for (c = 1; c <=10; c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }

}