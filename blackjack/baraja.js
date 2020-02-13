class Baraja {
    baraja = [];
    crearBaraja() {
        let palo = new Palo();
        let carta = new Carta();
       let car={}
        for (let i = 0; i < palo.palos.length; i++) {
            for (let j = 0; j < carta.cartas.length; j++) {
                if (carta.cartas[j]==='A') {
                     car = {
                        palo: palo.palos[i],
                        texto: carta.cartas[j],
                        valor:'1,11'
                    }
                    this.baraja.push(car);
                }else if (carta.cartas[j]==='J' || carta.cartas[j]==='Q' || carta.cartas[j]==='K') {
                    car = {
                        palo: palo.palos[i],
                        texto: carta.cartas[j],
                        valor: '10'
                    }
                    this.baraja.push(car);
                }else{
                    car = {
                        palo: palo.palos[i],
                        texto: carta.cartas[j],
                        valor:carta.cartas[j]
                    }
                    this.baraja.push(car);
                }
              

            }
        }
    }
}