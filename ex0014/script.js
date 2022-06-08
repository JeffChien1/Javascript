function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora>= 0 && hora < 12) {
        //BOM DIA!
        img.src = "foto-manha.jpg"
        document.body.style.background = '#e0f1f8'
    }else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = "foto-tarde.jpg"
        document.body.style.background = '#e07b2b'
    }else {
        //BOA NOITE!
        img.src = "foto-noite.jpg"
        document.body.style.background = '#346dc7'
    }
}

