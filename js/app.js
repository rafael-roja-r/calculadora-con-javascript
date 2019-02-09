var Calculadora = {
  display: document.getElementById('display'),
  uno: document.getElementById('1'),
  dos: document.getElementById('2'),
  tres: document.getElementById('3'),
  cuatro: document.getElementById('4'),
  cinco: document.getElementById('5'),
  seis: document.getElementById('6'),
  siete: document.getElementById('7'),
  ocho: document.getElementById('8'),
  nueve: document.getElementById('9'),
  cero: document.getElementById('0'),
  on: document.getElementById('on'),
  sign: document.getElementById('sign'),
  mas: document.getElementById('mas'),
  menos: document.getElementById('menos'),
  por: document.getElementById('por'),
  dividido: document.getElementById('dividido'),
  igual: document.getElementById('igual'),
  punto: document.getElementById('punto'),
  tecla: document.querySelectorAll('.tecla'),
  aux: 0,
  operacion: "",
  init: function() {
    this.eventos()
  },
  eventos: function() {
    //agregar numeros
    this.uno.addEventListener('click', function() {
      Calculadora.mostrar("1")
    })
    this.dos.addEventListener('click', function() {
      Calculadora.mostrar("2")
    })
    this.tres.addEventListener('click', function() {
      Calculadora.mostrar("3")
    })
    this.cuatro.addEventListener('click', function() {
      Calculadora.mostrar("4")
    })
    this.cinco.addEventListener('click', function() {
      Calculadora.mostrar("5")
    })
    this.seis.addEventListener('click', function() {
      Calculadora.mostrar("6")
    })
    this.siete.addEventListener('click', function() {
      Calculadora.mostrar("7")
    })
    this.ocho.addEventListener('click', function() {
      Calculadora.mostrar("8")
    })
    this.nueve.addEventListener('click', function() {
      Calculadora.mostrar("9")
    })
    this.cero.addEventListener('click', function() {
      Calculadora.mostrar("0")
    })
    //reiniciar display
    this.on.addEventListener('click', function() {
      display.innerHTML = 0
      aux = 0
    })
    //cambiar de signo
    this.sign.addEventListener('click', function() {
      display.innerHTML *= -1
    })
    //operaciones
    this.mas.addEventListener('click', function() {
      Calculadora.sumar()
    })
    this.menos.addEventListener('click', function() {
      Calculadora.restar()
    })
    this.por.addEventListener('click', function() {
      Calculadora.multiplicar()
    })
    this.dividido.addEventListener('click', function() {
      Calculadora.dividir()
    })
    //validar punto
    this.punto.addEventListener('click', function() {
      Calculadora.validarPunto()
    })
    this.igual.addEventListener('click', function() {
      Calculadora.resultadoOperacion()
    })
    //efectos teclas
    for (var i = 0; i < this.tecla.length; i++) {
      this.tecla[i].addEventListener('mousedown', function() {
        this.style.transform="scale(0.9)"
      })
    }
    for (var i = 0; i < this.tecla.length; i++) {
      this.tecla[i].addEventListener('mouseup', function() {
        this.style.transform="scale(1)"
      })
    }
  },
  validarPunto:function(){
    if(display.innerHTML.indexOf(".")==-1){
      display.innerHTML += "."
    }
  },
  mostrar: function(num) {
    if (display.innerHTML.length < 8 ) {
      if (display.innerHTML == "0") {
        display.innerHTML = num
      }else{
        display.innerHTML += num
      }
    }

  },
  sumar: function() {
    aux = display.innerHTML
    display.innerHTML = ""
    operacion = "+"
  },
  restar: function() {
    aux = display.innerHTML
    display.innerHTML = ""
    operacion = "-"
  },
  multiplicar: function() {
    aux = display.innerHTML
    display.innerHTML = ""
    operacion = "*"
  },
  dividir: function() {
    aux = display.innerHTML
    display.innerHTML = ""
    operacion = "/"
  },
  resultadoOperacion: function() {
    if (operacion=="+") {
      display.innerHTML=parseFloat(aux) + parseFloat(display.innerHTML);
      aux=display.innerHTML
    }else if (operacion=="-") {
      display.innerHTML=parseFloat(aux) - parseFloat(display.innerHTML);
      aux=display.innerHTML
    }else if (operacion=="*") {
      display.innerHTML=parseFloat(aux) * parseFloat(display.innerHTML);
      aux=display.innerHTML
    }else if (operacion=="/") {
      display.innerHTML=parseFloat(aux) / parseFloat(display.innerHTML);
      aux=display.innerHTML
    }
  }
}
Calculadora.init()
