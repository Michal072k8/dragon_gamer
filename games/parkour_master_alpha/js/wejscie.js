class Wejscie {
  constructor() {
    this.nacisniety = {};
    document.onkeydown = (event) => {
			this.nacisniety[event.keyCode] = true;
		}

		document.onkeyup = (event) => {
			this.nacisniety[event.keyCode] = false;
		}
  }

  aktualizacja(dane) {
    let mario = dane.obiekty.mario;

		if(this.nacisnieto(39) && !mario.momentSmierci) {
			mario.kierunek = "prawo";
			mario.pedX = 8;

			if(mario.pedY == 0) {
				mario.obecnyStan = mario.poruszanie;
			}else {
				mario.obecnyStan = mario.poruszanie;
			}
			
		}
		if(this.nacisnieto(37) && !mario.momentSmierci) {
			mario.kierunek = "lewo";
			mario.pedX = -8;

			
			if(mario.pedY == 0) {
				mario.obecnyStan = mario.poruszanie;
			}else {
				mario.obecnyStan = mario.poruszanie;
			}

		}
		if(this.nacisnieto(32)) {
			mario.obecnyStan = mario.stan.skakanie;
		}
  }

  nacisnieto(kod) {
    return this.nacisniety[kod];
  }
}
