class Juego {

    mezclar = () => {
         this.shuffle(mazo);
        console.log(mazo);

    }
    pedirCartaJugador = () => {
        if (mazo[cont].texto==='A') {
            mazo[cont].valor=parseInt(prompt('Que valor desea darle ingrese el número 11 o 1'));
            let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo +' texto = '+mazo[cont].texto;
            console.log(cartaJugada);
            document.getElementById('cartaJugador').innerHTML='Carta del Jugador: '+cartaJugada;
            let num=parseInt(mazo[cont].valor);
            puntajeJugardor.push(num);
            cont++;
        }else{
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);
        document.getElementById('cartaJugador').innerHTML='Carta del Jugador: '+cartaJugada;
        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        cont++;}
    }
    pedirCartaCpu = () => {
        
        if (suma1<=21) {
            puntajeCPU.forEach(function(n){
                console.log(n);
                suma1 += n;
            });
            let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo +' texto = '+mazo[cont].texto;
            console.log(cartaJugada);
            let numer=parseInt(mazo[cont].valor);
            puntajeCPU.push(numer);
            cont++;
            this.pedirCartaCpu();
            suma1=0;
        }else if (suma1>21) {
           
            console.log('no jugar carta ' + suma1);
        }
       
    }
    validar = () => {
        puntajeCPU.forEach(function(n){
            console.log(n);
            suma1 += n;
        });
        puntajeJugardor.forEach(function(numero){
            console.log(numero);
            suma += numero;
        });
        console.log(puntajeCPU);

        suma1=suma1-puntajeCPU[puntajeCPU.length-1];
        console.log(suma);
        document.getElementById('resultadoJuga').innerHTML='Resultado Jugador : '+suma;
        console.log(suma1);
        document.getElementById('resultadoCPU').innerHTML='Resultado CPU : '+suma1;
        if (suma<=21 && suma1<suma) {
            console.log('ganaste');
        document.getElementById('res').innerHTML='Felicitaciones ganaste';

        } else if(suma>21){
            console.log('perdiste');
        document.getElementById('res').innerHTML='Perdiste';

        }else if (suma===suma1 && suma<=21 && suma1<=21) {
            console.log('empate');
        document.getElementById('res').innerHTML='Empate';

        }else if (suma<suma1 && suma<=21 && suma1<=21) {
            console.log('perdiste');
        document.getElementById('res').innerHTML='Perdiste';

        }
    }
    shuffle=(arr)=> {
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;    
    };
}